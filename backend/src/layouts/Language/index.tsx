import React, { FC, useEffect, useState, useCallback } from "react";
import { ConfigProvider } from "antd";
import { initLanguage, LanguageType } from "@/locales";
import zh_CN from "antd/es/locale/zh_CN";
import en_US from "antd/es/locale/en_US";

const languages = {
  zh_CN: zh_CN,
  en_US: en_US,
};

export const Language: FC = props => {
  const { children } = props;

  const language: LanguageType = (localStorage.getItem("locale") as LanguageType) || "zh_CN";

  const [init, setInit] = useState(false);

  const initLanguageCall = useCallback(async () => {
    await initLanguage(language);
    !init && setInit(true);
  }, [init, language]);

  useEffect(() => {
    initLanguageCall();
  }, [initLanguageCall]);

  return <ConfigProvider locale={languages[language]}>{init && children}</ConfigProvider>;
};
