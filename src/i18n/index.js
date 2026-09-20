import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "./locales/en/common.json";
import commonJa from "./locales/ja/common.json";
import commonEs from "./locales/es/common.json";
import homeEn from "./locales/en/home.json";
import homeJa from "./locales/ja/home.json";
import homeEs from "./locales/es/home.json";
import aboutEn from "./locales/en/about.json";
import aboutJa from "./locales/ja/about.json";
import aboutEs from "./locales/es/about.json";
import productsEn from "./locales/en/products.json";
import productsJa from "./locales/ja/products.json";
import productsEs from "./locales/es/products.json";
import serviceEn from "./locales/en/service.json";
import serviceJa from "./locales/ja/service.json";
import serviceEs from "./locales/es/service.json";
import oemEn from "./locales/en/oem.json";
import oemJa from "./locales/ja/oem.json";
import oemEs from "./locales/es/oem.json";
import faqEn from "./locales/en/faq.json";
import faqJa from "./locales/ja/faq.json";
import faqEs from "./locales/es/faq.json";
import contactEn from "./locales/en/contact.json";
import contactJa from "./locales/ja/contact.json";
import contactEs from "./locales/es/contact.json";
import sampleEn from "./locales/en/sample.json";
import sampleJa from "./locales/ja/sample.json";
import sampleEs from "./locales/es/sample.json";

export const SUPPORTED_LANGUAGES = ["en", "ja", "es"];
export const LANGUAGE_STORAGE_KEY = "vineco-language";

function withCanonicalAliases(bundle) {
  const next = { ...(bundle || {}) };

  for (const [key, value] of Object.entries(bundle || {})) {
    const alias = normalizeTranslationKey(key);
    if (alias && !(alias in next)) next[alias] = value;
  }

  return next;
}

const resources = {
  en: {
    common: withCanonicalAliases(commonEn),
    home: withCanonicalAliases(homeEn),
    about: withCanonicalAliases(aboutEn),
    products: withCanonicalAliases(productsEn),
    service: withCanonicalAliases(serviceEn),
    oem: withCanonicalAliases(oemEn),
    faq: withCanonicalAliases(faqEn),
    contact: withCanonicalAliases(contactEn),
    sample: withCanonicalAliases(sampleEn),
  },
  ja: {
    common: withCanonicalAliases(commonJa),
    home: withCanonicalAliases(homeJa),
    about: withCanonicalAliases(aboutJa),
    products: withCanonicalAliases(productsJa),
    service: withCanonicalAliases(serviceJa),
    oem: withCanonicalAliases(oemJa),
    faq: withCanonicalAliases(faqJa),
    contact: withCanonicalAliases(contactJa),
    sample: withCanonicalAliases(sampleJa),
  },
  es: {
    common: withCanonicalAliases(commonEs),
    home: withCanonicalAliases(homeEs),
    about: withCanonicalAliases(aboutEs),
    products: withCanonicalAliases(productsEs),
    service: withCanonicalAliases(serviceEs),
    oem: withCanonicalAliases(oemEs),
    faq: withCanonicalAliases(faqEs),
    contact: withCanonicalAliases(contactEs),
    sample: withCanonicalAliases(sampleEs),
  },
};

function normalizeLanguage(value) {
  const language = String(value || "").toLowerCase().split("-")[0];
  return SUPPORTED_LANGUAGES.includes(language) ? language : "en";
}

function initialLanguage() {
  if (typeof window === "undefined") return "en";
  return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en");
}

export function normalizeTranslationKey(value) {
  return String(value ?? "")
    .replace(/\u00A0/g, " ")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function translateText(namespace, value, language = i18n.resolvedLanguage || i18n.language) {
  if (typeof value !== "string") return value;
  const key = normalizeTranslationKey(value);
  if (!key) return value;
  const lng = normalizeLanguage(language);
  if (lng === "en" || !i18n.exists(key, { ns: namespace, lng })) return value;
  return i18n.t(key, { ns: namespace, lng });
}

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute("content", value);
}

function syncDocument(language) {
  if (typeof document === "undefined") return;
  const lng = normalizeLanguage(language);
  document.documentElement.lang = lng;
  document.documentElement.dataset.language = lng;
  if (typeof window !== "undefined") window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);

  const titleSource = "VinEco - Natural Pet Products & OEM/ODM Vietnam";
  const descriptionSource = "VinEco manufactures natural pet products in Vietnam with OEM, ODM and private-label support for distributors, retailers and global pet brands.";
  const ogDescriptionSource = "Natural pet products made in Vietnam with OEM, ODM and private-label support for distributors, retailers and global pet brands.";
  const title = translateText("common", titleSource, lng);
  const description = translateText("common", descriptionSource, lng);
  const ogDescription = translateText("common", ogDescriptionSource, lng);
  document.title = title;
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', ogDescription);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', ogDescription);
  setMeta('meta[property="og:locale"]', lng === "ja" ? "ja_JP" : lng === "es" ? "es_ES" : "en_US");
}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage(),
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  defaultNS: "common",
  fallbackNS: "common",
  keySeparator: false,
  nsSeparator: false,
  returnNull: false,
  interpolation: { escapeValue: false },
});

syncDocument(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", syncDocument);

export default i18n;
