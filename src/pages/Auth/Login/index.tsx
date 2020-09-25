import React, { FC } from "react";
import { Input, Button, Form } from "antd";
import md5 from "md5";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { intl, lang } from "@/locales";
import { useHistory } from "react-router-dom";
import { useAction, useLoading } from "@/action";
import { LoginRequest } from "@/types";

interface propTypes {}

export const Login: FC<propTypes> = props => {
  const [form] = Form.useForm();
  const history = useHistory();

  const actions = useAction("auth");
  const [loading] = useLoading(["login"]);

  const onFinish = async (values: LoginRequest) => {
    const [status, res] = await actions.login({
      data: {
        name: values.name,
        password: md5(values.password),
      },
    });
    if (!status) return;
    history.push("/home");
  };

  return (
    <div style={{ width: "360px" }}>
      <Form form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: intl.get(lang["auth.login.username.placeholder"]) }]}
        >
          <Input
            prefix={<UserOutlined />}
            size="large"
            placeholder={intl.get(lang["auth.login.username.placeholder"])}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: intl.get(lang["auth.login.password.placeholder"]) }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            size="large"
            placeholder={intl.get(lang["auth.login.password.placeholder"])}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit" loading={loading}>
            {intl.get(lang["auth.login.submit"])}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
