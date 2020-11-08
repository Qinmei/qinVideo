import React from "react";
import { Popover, Avatar } from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { intl } from "@/locales";
import { useUserToken } from "@/hooks";
import { useHistory } from "react-router-dom";

import { PopContent } from "./popContent";
import styles from "./index.less";

interface PropsType {}

const UserData = [
  {
    icon: <SettingOutlined />,
    label: intl.get("common.header.user.setting"),
    value: "setting",
  },
  {
    icon: <LogoutOutlined />,
    label: intl.get("common.header.user.logout"),
    value: "logout",
  },
];

export const UserInfo: React.FC<PropsType> = props => {
  const { userInfo, clearTokenCall } = useUserToken();
  const history = useHistory();

  const onChange = (value: string) => {
    if (value === "setting") {
      history.push("/home/setting");
    } else {
      clearTokenCall();
    }
  };

  return (
    <Popover
      placement="bottom"
      content={<PopContent source={UserData} onChange={onChange} />}
      trigger="hover"
    >
      <div className={`${styles.list}`}>
        <Avatar size={30} icon={<UserOutlined />} src={userInfo?.avatar} />
        <label>{userInfo?.name}</label>
      </div>
    </Popover>
  );
};
