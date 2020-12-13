import React, { FC, ReactElement } from "react";
import styles from "./index.less";

type List = {
  icon?: ReactElement;
  label: string;
  value: string;
};

interface PropsType {
  source: List[];
  onChange: (value: string) => void;
}

export const PopContent: FC<PropsType> = props => {
  const { source, onChange } = props;
  return (
    <div className={styles.popCon}>
      {source.map((item, index) => (
        <div
          className={`${styles.popList} ${index !== 0 && styles.popLine}`}
          onClick={() => onChange(item.value)}
          key={item.value}
        >
          {item.icon}
          <label>{item.label}</label>
        </div>
      ))}
    </div>
  );
};
