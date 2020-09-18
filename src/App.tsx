import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorLayout } from "@/layouts";
import { ConfigProvider } from "@/contexts";
import { Pages } from "@/pages";
import { Language } from "@/locales";

type PropsType = {};

export const App: FC<PropsType> = props => {
  return (
    <ConfigProvider>
      <Language>
        <BrowserRouter>
          <ErrorLayout>
            <Pages></Pages>
          </ErrorLayout>
        </BrowserRouter>
      </Language>
    </ConfigProvider>
  );
};
