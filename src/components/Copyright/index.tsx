import React, { FC } from "react";
import styles from "./index.less";
import { intl } from "@/locales";
import { Config } from "@/constants";

interface PropType {}

export const Copyright: FC<PropType> = props => {
  return (
    <div className={styles.footer}>
      {intl.getHTML("auth.footer", { link: Config.Base.copyright })}
    </div>
  );
};
