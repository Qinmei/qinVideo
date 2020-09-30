import React, { FC } from "react";
import { Input, Button, Form, message } from "antd";
import md5 from "md5";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import * as intl from "react-intl-universal";
import { useAction, useLoading } from "@/action";
import { AuthType } from "@/types";

interface propTypes {}

const Overview: FC<propTypes> = props => {
  const [form] = Form.useForm();

  const actions = useAction("auth");
  const [loading] = useLoading(["init"]);

  const onFinish = async (values: AuthType.LoginRequestData) => {
    const [status] = await actions.init({
      data: {
        name: values.name,
        email: values.email,
        password: md5(values.password),
      },
    });
    if (!status) return;
    message.success(intl.get("auth.init.success"));
  };

  return (
    <div style={{ width: "360px" }}>
      <Form form={form} name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: intl.get("auth.login.email.tips") }]}
        >
          <Input
            prefix={<MailOutlined />}
            size="large"
            placeholder={intl.get("auth.login.email.tips")}
          />
        </Form.Item>
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
            {intl.get("auth.init.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Overview;
