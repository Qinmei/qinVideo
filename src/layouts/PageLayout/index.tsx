import React, { ReactNode } from "react";
import { Layout, Affix } from "antd";
import styles from "./index.less";
import logo from "@/assets/logo.svg";

interface PropsType {
  sider: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  collapse?: boolean;
}

export const PageLayout: React.FC<PropsType> = props => {
  const { sider, header, footer, children, collapse = false } = props;

  const theme: "light" | "dark" = "dark";

  return (
    <Layout className={styles.wrapper}>
      <div className={styles.sideCon}>
        <div className={`${styles.logo} ${styles[theme]}`}>
          <img src={logo} alt="" />
          {!collapse && <span>Qin Video</span>}
        </div>
        <Layout.Sider
          width={240}
          className={`${styles.sider} ${styles[theme]}`}
          theme={theme}
          collapsed={collapse}
        >
          {sider}
        </Layout.Sider>
      </div>
      <Layout className={styles.main}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>{footer}</div>
      </Layout>
    </Layout>
  );
};
