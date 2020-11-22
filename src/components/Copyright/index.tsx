import React, { FC } from "react";
import styles from "./index.less";
import { intl } from "@/locales";
import { Config } from "@/constants";

export const Copyright: FC = props => {
  return (
    <div className={styles.footer}>
      {intl.getHTML("auth.layout.footer", { link: Config.Base.copyright })}
    </div>
  );
};
