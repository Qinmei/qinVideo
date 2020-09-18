import React, { FC, useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { ErrorLayout } from "@/layouts";
import { ConfigContext, ConfigProvider } from "@/contexts";
import { Pages } from "@/pages";
import { setLanguage } from "@/locales";

type PropsType = {};

export const App: FC<PropsType> = (props) => {
  const config = useContext(ConfigContext);
  const {
    state: { language },
  } = config;

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  return (
    <ConfigProvider>
      <AntdConfigProvider locale={language}>
        <BrowserRouter>
          <ErrorLayout>
            <Pages></Pages>
          </ErrorLayout>
        </BrowserRouter>
      </AntdConfigProvider>
    </ConfigProvider>
  );
};
