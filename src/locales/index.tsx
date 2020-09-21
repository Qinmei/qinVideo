import intl from "react-intl-universal";
import { common } from "./common";
import { auth } from "./auth";

export type LanguageType = "zh_CN" | "en_US";

const sections = [common, auth];

const data = {
  common: common.type,
  auth: auth.type,
};

export const setLanguage = async (language: LanguageType) => {
  let result: any = {};
  for (const item of sections) {
    try {
      Object.keys(res.default).forEach(ele => {
        result[`${item}.${ele}`] = res.default[ele];
      });
    } catch (e) {
      console.log("no language type");
    }
  }
  await intl.init({
    currentLocale: language,
    locales: {
      [language]: result,
    },
  });
};
