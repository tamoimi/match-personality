import i18n from "i18next";
import translationEN from "./en/global.json";
import translationKO from "./ko/global.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
