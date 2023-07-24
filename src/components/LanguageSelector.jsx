import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const DEFAULT_LANGUAGE_CODE =
  localStorage.getItem("celang") ||
  navigator.language?.slice(0, 2) ||
  navigator.userLanguage?.slice(0, 2) ||
  "it";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language ?? DEFAULT_LANGUAGE_CODE;

  useEffect(() => {
    localStorage.setItem("celang", currentLanguage);
  }, [currentLanguage]);

  const translateToIT = () => {
    i18next.changeLanguage("it", (err) => {
      if (err) {
        return console.error("Error to load language", err);
      }
    });
  };

  const translateToEN = () => {
    i18next.changeLanguage("en", (err) => {
      if (err) {
        return console.error("Error to load language", err);
      }
    });
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={currentLanguage === "it" ? translateToEN : translateToIT}
    >
      <strong>{(currentLanguage === "it" ? "en" : "it").toUpperCase()}</strong>
    </div>
  );
};
