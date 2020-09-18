import React, { FC } from "react";
import { Input, Button, Form } from "antd";
import intl from "react-intl-universal";
import { useHistory } from "react-router-dom";

interface propTypes {}

const LoginComponent: FC<propTypes> = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values: any) => {};

  return (
    <Form form={form} name="login" onFinish={onFinish}>
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: intl.get("PHONE_EMAIL_TIP"),
          },
        ]}
      >
        <Input placeholder={intl.get("PHONE_EMAIL")} size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          {intl.get("LOGIN")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
