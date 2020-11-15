import React, { FC } from "react";
import { Input, Button, Form } from "antd";
import md5 from "md5";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { intl } from "@/locales";
import { useHistory } from "react-router-dom";
import { useAction, useLoading } from "@/action";
import { AuthType } from "@/types";
import { useUserToken } from "@/hooks";

interface propTypes {}

export const Login: FC<propTypes> = props => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { saveTokenCall } = useUserToken();

  const actions = useAction("auth");
  const [loading] = useLoading(["login"]);

  const onFinish = async (values: AuthType.LoginRequestData) => {
    const [status, res] = await actions.login({
      data: {
        name: values.name,
        password: md5(values.password),
      },
    });
    if (!status) return;
    saveTokenCall(res);
    history.push("/home/dashboard/analysis");
  };

  return (
    <div style={{ width: "360px" }}>
      <Form form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: intl.get("auth.login.username.tips") }]}
        >
          <Input
            prefix={<UserOutlined />}
            size="large"
            placeholder={intl.get("auth.login.username.tips")}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: intl.get("auth.login.password.tips") }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            size="large"
            placeholder={intl.get("auth.login.password.tips")}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit" loading={loading}>
            {intl.get("auth.login.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
