import React, { FC } from "react";
import { Input, Button, Form, DatePicker } from "antd";
import intl from "react-intl-universal";
import { useHistory } from "react-router-dom";

interface propTypes {}

export const Login: FC<propTypes> = props => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values: any) => {};

  console.log("login render");

  return (
    <Form form={form} name="login" onFinish={onFinish}>
      <Form.Item name="userName">
        <Input size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" size="large">
          {intl.get("common.message1")}
          中文
        </Button>

        <Button type="primary" size="large">
          {intl.get("common.message1")}
          英文
        </Button>
      </Form.Item>
      <DatePicker></DatePicker>
    </Form>
  );
};
