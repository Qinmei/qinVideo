import React, { FC } from "react";
import { Input, Button, Form } from "antd";
import * as intl from "react-intl-universal";
import { useHistory } from "react-router-dom";

interface propTypes {}

export const Init: FC<propTypes> = props => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values: any) => {
    history.push("/login");
  };

  return (
    <div style={{ width: "360px" }}>
      <Form form={form} name="register" onFinish={onFinish}>
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
            {intl.get("REGISTER")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
