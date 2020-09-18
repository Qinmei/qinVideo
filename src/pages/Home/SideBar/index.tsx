import React, { FC } from "react";
import { Layout } from "antd";

interface PropsType {}

const SideBar: FC<PropsType> = (props) => {
  return (
    <Layout.Sider
      width={240}
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: 9,
        background: "#fff",
        fontSize: "14px",
      }}
      theme="light"
    ></Layout.Sider>
  );
};

export default SideBar;
