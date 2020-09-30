import React from "react";
import { Popover } from "antd";
import { GlobalOutlined, FontColorsOutlined } from "@ant-design/icons";
import { intl } from "@/locales";
import { setLanguage, LanguageType } from "@/locales";

import { PopContent } from "./popContent";
import styles from "./index.less";

interface PropsType {}

const LanguageData = [
  {
    icon: <FontColorsOutlined />,
    label: intl.get("common.header.lang.zh_CN"),
    value: "zh_CN",
  },
  {
    icon: <FontColorsOutlined />,
    label: intl.get("common.header.lang.en_US"),
    value: "en_US",
  },
];

export const Language: React.FC<PropsType> = props => {
  const changeLanguage = (value: string) => {
    setLanguage(value as LanguageType);
  };

  return (
    <Popover
      placement="bottomRight"
      content={<PopContent source={LanguageData} onChange={changeLanguage} />}
      trigger="hover"
    >
      <div className={`${styles.list} ${styles.small}`}>
        <GlobalOutlined />
      </div>
    </Popover>
  );
};
