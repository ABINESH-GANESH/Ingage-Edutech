import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from "./languages";

const savedLanguage = (typeof window !== "undefined" && localStorage.getItem(LANGUAGE_STORAGE_KEY)) || DEFAULT_LANGUAGE;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // React already safeguards from XSS
    },
    react: {
      useSuspense: false,
    },
  });

// Apply document language and text direction attributes
export const applyLanguageAttributes = (langCode) => {
  if (typeof document !== "undefined") {
    const langObj = SUPPORTED_LANGUAGES.find((l) => l.code === langCode) || { dir: "ltr" };
    document.documentElement.setAttribute("lang", langCode);
    document.documentElement.setAttribute("dir", langObj.dir || "ltr");
    if (typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
    }
  }
};

// Listen for language changes and update DOM attributes & storage
i18n.on("languageChanged", (lng) => {
  applyLanguageAttributes(lng);
});

// Initial invocation on load
applyLanguageAttributes(savedLanguage);

export default i18n;
