import packageInfo from "../package.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    // logs info level to console output.
    // Helps finding issues with loading not working
    debug: process.env.NODE_ENV === "development",
    // options for backend
    // cfr: https://github.com/i18next/i18next-http-backend
    backend: {
      // path where resources get loaded from
      loadPath: `/translations/{{lng}}.json?build=${packageInfo.version}`,
      // allow credentials on cross domain requests
      withCredentials: false,
    },

    // Default namespace used if not passed to translation function
    defaultNS: "translations",

    // String or array of namespaces to load
    ns: "translations",

    // language to use if translations in user language are not available.
    // As IETF language tag
    fallbackLng: "it",

    // strategy to define which language codes to lookup
    load: "currentOnly",

    interpolation: {
      // escape passed in values to avoid XSS injection
      escapeValue: false,
      // used to separate format from interpolation value
      formatSeparator: ",",
    },
    // char to separate keys.
    // If working with a flat JSON, it's recommended to set this to false
    keySeparator: false,

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    react: {
      // If using Suspense or not
      useSuspense: true,
    },
  });
