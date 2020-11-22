import React from "react";
import { Tabs } from "antd";
import { AuthLayout } from "@/layouts";
import { intl } from "@/locales";
import { Login } from "./Login";
import { Init } from "./Init";
import { useAdminInit } from "@/hooks";

const Auth: React.FC = props => {
  const [init] = useAdminInit();

  return (
    <AuthLayout>
      <Tabs defaultActiveKey="login" centered>
        <Tabs.TabPane tab={intl.get("auth.login.title")} key="login">
          <Login />
        </Tabs.TabPane>
        {init && (
          <Tabs.TabPane tab={intl.get("auth.init.title")} key="init">
            <Init />
          </Tabs.TabPane>
        )}
      </Tabs>
    </AuthLayout>
  );
};

export default Auth;
