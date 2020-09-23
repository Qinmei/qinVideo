import React, { FC } from "react";
import { Input, Button, Form } from "antd";
import { intl, lang } from "@/locales";
import { useHistory } from "react-router-dom";
import { useModel } from "@/action";

interface propTypes {}

export const Login: FC<propTypes> = props => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [actions, reducers] = useModel(["auth"]);

  const onFinish = (values: any) => {};

  console.log("login render");

  return (
    <Form form={form} name="login" onFinish={onFinish}>
      <Form.Item name="userName">
        <Input size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" size="large">
          {intl.get(lang.message1)}
        </Button>

        <Button type="primary" size="large">
          {intl.get(lang.message1)}
        </Button>
      </Form.Item>
    </Form>
  );
};
