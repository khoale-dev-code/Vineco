import { cloneElement, isValidElement } from "react";
import { useTranslation } from "react-i18next";
import { normalizeTranslationKey } from "./index";

const HOST_TRANSLATABLE_PROPS = new Set(["aria-label", "alt", "placeholder", "title"]);
const SKIP_CUSTOM_PROPS = new Set([
  "className", "style", "src", "srcSet", "sizes", "href", "to", "id", "name", "type", "value", "defaultValue",
  "method", "target", "rel", "role", "htmlFor", "loading", "decoding", "referrerPolicy", "viewBox", "fill", "stroke", "d",
  "width", "height", "key", "icon", "image", "imageFit", "imagePosition", "mediaPosition", "contain", "end", "mobile", "dark",
]);

function translateString(value, i18n, namespaces, language) {
  const key = normalizeTranslationKey(value);
  if (!key || language === "en") return value;
  for (const ns of namespaces) {
    if (i18n.exists(key, { ns, lng: language })) {
      const translated = i18n.t(key, { ns, lng: language });
      const leading = value.match(/^\s*/)?.[0] || "";
      const trailing = value.match(/\s*$/)?.[0] || "";
      return leading + translated + trailing;
    }
  }
  return value;
}

function localizeValue(value, i18n, namespaces, language, propName = "") {
  if (typeof value === "string") return translateString(value, i18n, namespaces, language);
  if (Array.isArray(value)) return value.map((item) => localizeValue(item, i18n, namespaces, language, propName));
  if (isValidElement(value)) return localizeElement(value, i18n, namespaces, language);
  if (value && typeof value === "object" && !SKIP_CUSTOM_PROPS.has(propName)) {
    const next = {};
    for (const [key, item] of Object.entries(value)) {
      next[key] = SKIP_CUSTOM_PROPS.has(key) ? item : localizeValue(item, i18n, namespaces, language, key);
    }
    return next;
  }
  return value;
}

function localizeElement(element, i18n, namespaces, language) {
  if (!isValidElement(element)) return element;
  const isHost = typeof element.type === "string";
  const nextProps = {};

  for (const [key, value] of Object.entries(element.props || {})) {
    if (key === "children") {
      nextProps.children = localizeValue(value, i18n, namespaces, language, key);
      continue;
    }
    if (isHost) {
      nextProps[key] = HOST_TRANSLATABLE_PROPS.has(key)
        ? localizeValue(value, i18n, namespaces, language, key)
        : value;
      continue;
    }
    nextProps[key] = SKIP_CUSTOM_PROPS.has(key)
      ? value
      : localizeValue(value, i18n, namespaces, language, key);
  }

  return cloneElement(element, nextProps);
}

export default function I18nScope({ namespaces = ["common"], children }) {
  const nsList = Array.isArray(namespaces) ? namespaces : [namespaces];
  const { i18n } = useTranslation(nsList);
  const language = String(i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  if (language === "en") return children;
  return localizeValue(children, i18n, nsList, language, "children");
}
