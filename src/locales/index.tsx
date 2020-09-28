import intlDefault from "react-intl-universal";
import { zh_CN, en_US } from "./lang";
import { CustomType } from "@/types";
import { Methods } from "@/utils";

export type LanguageType = "zh_CN" | "en_US";

const languages = {
  zh_CN: Methods.languageFlat(zh_CN),
  en_US: Methods.languageFlat(en_US),
};

export type LanguageKeys = CustomType.Paths<typeof zh_CN>;

const intl = {
  get: (key: LanguageKeys) => intlDefault.get(key),
  getHTML: (key: LanguageKeys, addon?: { [key: string]: string | number }) =>
    intlDefault.getHTML(key, addon),
};

const setLanguage = async (language: LanguageType = "zh_CN"): Promise<void> => {
  const result = languages[language] || {};
  await intlDefault.init({
    currentLocale: language,
    locales: {
      [language]: result,
    },
  });
};

export { intl, setLanguage };
