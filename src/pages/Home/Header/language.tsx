import React from "react";
import { Popover } from "antd";
import { GlobalOutlined, FontColorsOutlined, UnderlineOutlined } from "@ant-design/icons";
import { intl } from "@/locales";
import { setLanguage, LanguageType } from "@/locales";

import { PopContent } from "./popContent";
import styles from "./index.less";

const LanguageData = [
  {
    icon: <FontColorsOutlined />,
    label: intl.get("common.header.lang.zh_CN"),
    value: "zh_CN",
  },
  {
    icon: <UnderlineOutlined />,
    label: intl.get("common.header.lang.en_US"),
    value: "en_US",
  },
];

export const Language: React.FC = props => {
  const changeLanguage = (value: string) => {
    setLanguage(value as LanguageType);
  };

  return (
    <Popover
      placement="bottom"
      content={<PopContent source={LanguageData} onChange={changeLanguage} />}
      trigger="hover"
    >
      <div className={`${styles.list} ${styles.small}`}>
        <GlobalOutlined />
      </div>
    </Popover>
  );
};
