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

  return <div style={{ width: "360px" }}></div>;
};

export default Overview;
