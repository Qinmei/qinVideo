import React, { useState } from "react";
import { PageLayout } from "@/layouts";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./SideBar";
import { Copyright } from "@/components";

interface PropsType {}

const Home: React.FC<PropsType> = props => {
  const [collapse, setCollapse] = useState(false);
  return (
    <PageLayout
      sider={<Sidebar />}
      header={<Header collapse={collapse} setCollapse={setCollapse} />}
      footer={<Copyright />}
      collapse={collapse}
    >
      <Content />
    </PageLayout>
  );
};

export default Home;
