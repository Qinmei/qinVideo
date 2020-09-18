import React, { FC, useContext, useEffect } from "react";
import intl from "react-intl-universal";
import { ConfigProvider } from "antd";
import { ConfigContext } from "@/contexts";
import zh_CN from "antd/es/locale/zh_CN";
import en_US from "antd/es/locale/en_US";

export type LanguageType = "zh_CN" | "en_US";

const languages = {
  zh_CN: zh_CN,
  en_US: en_US,
};

const sections = ["common", "auth"];

const setLanguage = async (language: LanguageType) => {
  let result: any = {};
  for (const item of sections) {
    const res = await import(`@/locales/${item}/${language}.ts`);
    Object.keys(res).forEach(ele => {
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

type PropsType = {};

export const Language: FC<PropsType> = props => {
  const { children } = props;
  const config = useContext(ConfigContext);
  const {
    state: { language },
  } = config;

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  return (
    <ConfigProvider locale={languages[language]}>{children}</ConfigProvider>
  );
};
