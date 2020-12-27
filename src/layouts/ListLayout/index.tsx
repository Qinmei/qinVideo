import React, { FC, ReactNode } from "react";
import { Input } from "antd";
import styles from "./index.less";

interface PropsType {
  options: ReactNode;
  setting: ReactNode;
  children: ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const ListLayout: FC<PropsType> = props => {
  const { options, setting, placeholder, value, onChange, children } = props;

  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.options}>{options}</div>
        <div className={styles.search}>
          <Input.Search
            allowClear
            enterButton
            placeholder={placeholder}
            value={value}
            onSearch={onChange}
          />
          <span className={styles.setting}>{setting}</span>
        </div>
      </div>
      <div className={styles.table}>{children}</div>
    </main>
  );
};
