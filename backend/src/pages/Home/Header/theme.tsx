import React, { FC, useContext } from "react";
import { Popover } from "antd";
import { BgColorsOutlined, LayoutOutlined, LayoutFilled } from "@ant-design/icons";
import { ConfigContext } from "@/contexts";
import { getLang } from "@/locales";
import { PopContent } from "./popContent";
import styles from "./index.less";

const LanguageData = [
  {
    icon: <LayoutOutlined />,
    label: getLang("common.header.theme.light"),
    value: "light",
  },
  {
    icon: <LayoutFilled />,
    label: getLang("common.header.theme.dark"),
    value: "dark",
  },
];

export const Theme: FC = () => {
  const { state, methods } = useContext(ConfigContext);

  const { changeTheme } = methods;

  const themeSync = (value: string) => {
    changeTheme(value as "light" | "dark");
    if (value !== state.theme) {
      localStorage.setItem("theme", value);
    }
  };

  return (
    <Popover
      placement="bottomRight"
      content={<PopContent source={LanguageData} onChange={themeSync} />}
      trigger="hover"
    >
      <div className={`${styles.list} ${styles.small}`}>
        <BgColorsOutlined />
      </div>
    </Popover>
  );
};
