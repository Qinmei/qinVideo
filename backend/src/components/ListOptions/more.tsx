import { useMemo } from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getLang } from "@/locales";

type PropsType = {
  onChange: (value: string) => void;
};
export const MoreOptions = (props: PropsType) => {
  const { onChange } = props;
  const menu = useMemo(
    () => (
      <Menu onClick={({ key }) => onChange(key as string)}>
        <Menu.Item key="edit">{getLang("common.options.edit.all")}</Menu.Item>
        <Menu.Item key="delete">{getLang("common.options.delete.all")}</Menu.Item>
      </Menu>
    ),
    [onChange]
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        {getLang("common.options.more")}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
