import React, { FC } from "react";
import md5 from "md5";
import { useAsyncFn } from "react-use";
import { Input, Button, Form, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { getLang } from "@/locales";
import { useAction } from "@/action";
import { AuthType } from "@/types";

export const Init: FC = () => {
  const [form] = Form.useForm();
  const actions = useAction("auth");

  const [state, onFinish] = useAsyncFn(async (values: AuthType.LoginReqData) => {
    await actions.init({
      data: {
        name: values.name,
        email: values.email,
        password: md5(values.password),
      },
    });
    message.success(getLang("auth.init.success"));
  });
  return (
    <div style={{ width: "360px" }}>
      <Form form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: getLang("auth.login.email.tips") }]}
        >
          <Input
            prefix={<MailOutlined />}
            size="large"
            placeholder={getLang("auth.login.email.tips")}
          />
        </Form.Item>

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
            {getLang("auth.init.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
