import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { AuthLayout } from "@/layouts";
import { intl, lang } from "@/locales";
import { useAction } from "@/action";
import { Login } from "./Login";
import { Init } from "./Init";
import { useAdminInit } from "@/hooks";

interface propTypes {}

const Auth: React.FC<propTypes> = props => {
  const [init] = useAdminInit();

  return (
    <AuthLayout>
      <Tabs defaultActiveKey="login" centered>
        <Tabs.TabPane tab={intl.get(lang["auth.login.title"])} key="login">
          <Login></Login>
        </Tabs.TabPane>
        {init && (
          <Tabs.TabPane tab={intl.get(lang["auth.init.title"])} key="init">
            <Init></Init>
          </Tabs.TabPane>
        )}
      </Tabs>
    </AuthLayout>
  );
};

export default Auth;
