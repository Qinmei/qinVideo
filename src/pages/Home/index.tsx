import React from "react";
import { Layout } from "antd";
import SiderBar from "./SideBar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface PropsType {}

const Home: React.FC<PropsType> = (props) => {
  return (
    <Layout>
      <SiderBar />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Home;
