import intl from "react-intl-universal";

const sections = ["common", "auth"];

export type Language = "zh-CN" | "en-US";

export const setLanguage = async (language: Language) => {
  let result: any = {};
  for (const item of sections) {
    const res = await import(`@/locals/${item}/${language}.ts`);
    Object.keys(res).forEach((ele) => {
      result[`${item}.${ele}`] = res[ele];
    });
  }
  intl.init({
    currentLocale: language,
    locales: {
      [language]: result,
    },
  });
};
