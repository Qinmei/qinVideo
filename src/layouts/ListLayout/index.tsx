import React, { FC, ReactNode } from "react";
import { Input, Space, Tooltip, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { getLang } from "@/locales";
import styles from "./index.less";

interface PropsType {
  options: ReactNode;
  setting: ReactNode;
  children: ReactNode;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  reset: () => void;
}

export const ListLayout: FC<PropsType> = props => {
  const { options, setting, placeholder, value, onChange, reset, children } = props;

  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.options}>{options}</div>
        <div className={styles.setting}>
          <Space>
            <Input.Search
              allowClear
              enterButton
              placeholder={placeholder}
              value={value}
              onSearch={onChange}
              className={styles.search}
            />
            <Tooltip title={getLang("components.table.reset.tips")}>
              <Button type="dashed" icon={<DeleteOutlined />} onClick={reset} />
            </Tooltip>
            {setting}
          </Space>
        </div>
      </div>
      <div className={styles.table}>{children}</div>
    </main>
  );
};
