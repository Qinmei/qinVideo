import React, { FC } from "react";
import { Tabs } from "antd";
import { AuthLayout } from "@/layouts";
import { getLang } from "@/locales";
import { Login } from "./Login";
import { Init } from "./Init";
import { useAuthInit } from "@/hooks";

const Auth: FC = () => {
  const [init] = useAuthInit();

  return (
    <AuthLayout>
      <Tabs defaultActiveKey="login" centered>
        <Tabs.TabPane tab={getLang("auth.login.title")} key="login">
          <Login />
        </Tabs.TabPane>
        {init && (
          <Tabs.TabPane tab={getLang("auth.init.title")} key="init">
            <Init />
          </Tabs.TabPane>
        )}
      </Tabs>
    </AuthLayout>
  );
};

export default Auth;
