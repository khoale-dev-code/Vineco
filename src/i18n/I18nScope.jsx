import { cloneElement, isValidElement } from "react";
import { useTranslation } from "react-i18next";
import { normalizeTranslationKey } from "./index";

const HOST_TRANSLATABLE_PROPS = new Set([
  "aria-label",
  "alt",
  "placeholder",
  "title",
]);

const SKIP_CUSTOM_PROPS = new Set([
  "className",
  "style",
  "src",
  "srcSet",
  "sizes",
  "href",
  "to",
  "id",
  "name",
  "type",
  "value",
  "defaultValue",
  "method",
  "target",
  "rel",
  "role",
  "htmlFor",
  "loading",
  "decoding",
  "referrerPolicy",
  "viewBox",
  "fill",
  "stroke",
  "d",
  "width",
  "height",
  "key",
  "ref",
  "dangerouslySetInnerHTML",
  "icon",
  "image",
  "imageFit",
  "imagePosition",
  "mediaPosition",
  "contain",
  "end",
  "mobile",
  "dark",
]);

const REACT_PORTAL_TYPE = Symbol.for("react.portal");

function isReactPortal(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      value.$$typeof === REACT_PORTAL_TYPE,
  );
}

function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;

  const prototype = Object.getPrototypeOf(value);

  return (
    prototype === Object.prototype ||
    prototype === null
  );
}

function translateString(
  value,
  i18n,
  namespaces,
  language,
) {
  const key = normalizeTranslationKey(value);

  if (!key || language === "en") {
    return value;
  }

  for (const ns of namespaces) {
    if (i18n.exists(key, { ns, lng: language })) {
      const translated = i18n.t(key, {
        ns,
        lng: language,
      });

      const leading =
        value.match(/^\s*/)?.[0] || "";

      const trailing =
        value.match(/\s*$/)?.[0] || "";

      return (
        leading +
        String(translated) +
        trailing
      );
    }
  }

  return value;
}

function localizeArray(
  value,
  i18n,
  namespaces,
  language,
  propName,
  seen,
) {
  if (seen.has(value)) {
    return seen.get(value);
  }

  const next = [];
  seen.set(value, next);

  for (const item of value) {
    next.push(
      localizeValue(
        item,
        i18n,
        namespaces,
        language,
        propName,
        seen,
      ),
    );
  }

  return next;
}

function localizeObject(
  value,
  i18n,
  namespaces,
  language,
  seen,
) {
  if (seen.has(value)) {
    return seen.get(value);
  }

  const next = {};
  seen.set(value, next);

  for (const [key, item] of Object.entries(value)) {
    next[key] = SKIP_CUSTOM_PROPS.has(key)
      ? item
      : localizeValue(
          item,
          i18n,
          namespaces,
          language,
          key,
          seen,
        );
  }

  return next;
}

function localizeValue(
  value,
  i18n,
  namespaces,
  language,
  propName = "",
  seen = new WeakMap(),
) {
  if (typeof value === "string") {
    return translateString(
      value,
      i18n,
      namespaces,
      language,
    );
  }

  if (
    value === null ||
    value === undefined ||
    typeof value !== "object"
  ) {
    return value;
  }

  // React Portals are runtime objects, not translatable data.
  // Iterating/cloning a Portal as a plain object can crash React.
  if (isReactPortal(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return localizeArray(
      value,
      i18n,
      namespaces,
      language,
      propName,
      seen,
    );
  }

  if (isValidElement(value)) {
    return localizeElement(
      value,
      i18n,
      namespaces,
      language,
      seen,
    );
  }

  // Only recurse into plain application data.
  // Preserve DOM nodes, refs, class instances, Map/Set and
  // other runtime objects by identity.
  if (
    isPlainObject(value) &&
    !SKIP_CUSTOM_PROPS.has(propName)
  ) {
    return localizeObject(
      value,
      i18n,
      namespaces,
      language,
      seen,
    );
  }

  return value;
}

function localizeElement(
  element,
  i18n,
  namespaces,
  language,
  seen,
) {
  if (!isValidElement(element)) {
    return element;
  }

  const isHost =
    typeof element.type === "string";

  const nextProps = {};

  for (
    const [key, value] of
    Object.entries(element.props || {})
  ) {
    if (key === "children") {
      nextProps.children =
        localizeValue(
          value,
          i18n,
          namespaces,
          language,
          key,
          seen,
        );

      continue;
    }

    if (isHost) {
      nextProps[key] =
        HOST_TRANSLATABLE_PROPS.has(key)
          ? localizeValue(
              value,
              i18n,
              namespaces,
              language,
              key,
              seen,
            )
          : value;

      continue;
    }

    nextProps[key] =
      SKIP_CUSTOM_PROPS.has(key)
        ? value
        : localizeValue(
            value,
            i18n,
            namespaces,
            language,
            key,
            seen,
          );
  }

  return cloneElement(
    element,
    nextProps,
  );
}

export default function I18nScope({
  namespaces = ["common"],
  children,
}) {
  const nsList =
    Array.isArray(namespaces)
      ? namespaces
      : [namespaces];

  const { i18n } =
    useTranslation(nsList);

  const language = String(
    i18n.resolvedLanguage ||
      i18n.language ||
      "en",
  )
    .toLowerCase()
    .split(/[-_]/)[0];

  if (language === "en") {
    return children;
  }

  return localizeValue(
    children,
    i18n,
    nsList,
    language,
    "children",
    new WeakMap(),
  );
}
