import React, { FC, useState } from "react";
import { PageLayout } from "@/layouts";
import { Copyright } from "@/components";

import Content from "./Content";
import Header from "./Header";
import Sidebar from "./SideBar";

const Home: FC = () => {
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
