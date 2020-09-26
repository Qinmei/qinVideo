import React from "react";
import { intl } from "@/locales";
import styles from "./index.less";

interface propTypes {}

export const AuthLayout: React.FC<propTypes> = props => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h1>Qin Video</h1>
        <p className={styles.title}>{intl.get("auth.title")}</p>
        {children}
      </div>
    </div>
  );
};
