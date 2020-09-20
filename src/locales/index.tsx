import intl from "react-intl-universal";

export type LanguageType = "zh_CN" | "en_US";

const sections = ["common", "auth"];

export const setLanguage = async (language: LanguageType) => {
  let result: any = {};
  for (const item of sections) {
    const res = await import(`@/locales/${item}/${language}.ts`);
    Object.keys(res.default).forEach(ele => {
      result[`${item}.${ele}`] = res.default[ele];
    });
  }
  await intl.init({
    currentLocale: language,
    locales: {
      [language]: result,
    },
  });
};
