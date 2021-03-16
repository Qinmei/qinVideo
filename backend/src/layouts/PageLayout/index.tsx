import React, { FC, ReactNode, useContext } from "react";
import { Layout } from "antd";
import { useHistory } from "react-router-dom";
import { ConfigContext } from "@/contexts";
import { useUserToken } from "@/hooks";
import styles from "./index.less";
import logoWhite from "@/assets/logoWhite.svg";
import logoDark from "@/assets/logoDark.svg";

interface PropsType {
  sider: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  collapse?: boolean;
}

export const PageLayout: FC<PropsType> = props => {
  const { sider, header, footer, children, collapse = false } = props;

  const { refreshToken } = useUserToken();
  const history = useHistory();
  const { state } = useContext(ConfigContext);
  const { theme } = state;

  if (!refreshToken) history.push("/auth/login");

  return (
    <Layout className={styles.wrapper}>
      <div className={styles.sideCon}>
        <div className={`${styles.logo} ${styles[theme]}`}>
          <img src={theme === "dark" ? logoWhite : logoDark} alt="" />
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
      <div className={styles.main}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </Layout>
  );
};
