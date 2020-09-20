import React, { FC, useContext, useEffect, useState, useMemo } from "react";
import { ConfigProvider } from "antd";
import { ConfigContext } from "@/contexts";
import { setLanguage } from "@/locales";
import zh_CN from "antd/es/locale/zh_CN";
import en_US from "antd/es/locale/en_US";

const languages = {
  zh_CN: zh_CN,
  en_US: en_US,
};

type PropsType = {};

export const Language: FC<PropsType> = props => {
  const { children } = props;

  const { state } = useContext(ConfigContext);
  const { language } = state;

  const [init, setInit] = useState(false);

  const initLanguage = async () => {
    await setLanguage(language);
    !init && setInit(true);
  };

  useEffect(() => {
    initLanguage();
  }, [language]);

  console.log("language render");

  return (
    <ConfigProvider locale={languages[language]}>
      {init && children}
    </ConfigProvider>
  );
};
