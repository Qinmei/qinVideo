import React, { FC } from "react";
import md5 from "md5";
import { useAsyncFn } from "react-use";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { getLang } from "@/locales";
import { useAction } from "@/action";
import { AuthType } from "@/types";
import { useUserToken } from "@/hooks";

export const Login: FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { saveTokenCall } = useUserToken();

  const actions = useAction("auth");

  const [state, onFinish] = useAsyncFn(async (values: AuthType.LoginReq) => {
    const res = await actions.login({
      name: values.name,
      password: md5(values.password),
    });
    saveTokenCall(res);
    history.push("/home/dashboard/analysis");
  });

  return (
    <div style={{ width: "360px" }}>
      <Form form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: getLang("auth.login.username.tips") }]}
        >
          <Input
            prefix={<UserOutlined />}
            size="large"
            placeholder={getLang("auth.login.username.tips")}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: getLang("auth.login.password.tips") }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            size="large"
            placeholder={getLang("auth.login.password.tips")}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit" loading={state.loading}>
            {getLang("auth.login.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
