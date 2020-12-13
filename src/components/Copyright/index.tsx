import React, { FC } from "react";
import { getHTML } from "@/locales";
import { Config } from "@/constants";
import styles from "./index.less";

export const Copyright: FC = () => {
  return (
    <div className={styles.footer}>
      {getHTML("auth.layout.footer", { link: Config.Base.copyright })}
    </div>
  );
};
