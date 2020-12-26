import React, { FC } from "react";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Config } from "@/constants";
import styles from "./index.less";
import { getLang } from "@/locales";

export const Docs: FC = () => {
  const goToDocs = () => {
    window.open(Config.docs);
  };
  return (
    <Tooltip placement="bottom" title={getLang("common.header.docs")}>
      <div className={`${styles.list} ${styles.small}`} onClick={goToDocs}>
        <QuestionCircleOutlined />
      </div>
    </Tooltip>
  );
};
