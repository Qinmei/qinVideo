import intl from "react-intl-universal";
import { Language } from "./base";
import { zh_CN, en_US } from "./lang";

export type LanguageType = "zh_CN" | "en_US";

class Lang extends Language<Lang["zh_CN"]> {
  constructor() {
    super(zh_CN, en_US);
  }
  zh_CN = zh_CN;
}

const languages = new Lang();

const lang = languages.type;

const setLanguage = async (language: LanguageType = "zh_CN") => {
  let result = languages[language] || {};
  await intl.init({
    currentLocale: language,
    locales: {
      [language]: result,
    },
  });
};

export { lang, intl, setLanguage };
