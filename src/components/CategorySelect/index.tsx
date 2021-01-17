import React from "react";
import { Button, Row, Space, TreeSelect } from "antd";
import { useCategoryType } from "@/hooks";
import styles from "./index.less";

import { CategoryType } from "@/types";
import { PlusOutlined } from "@ant-design/icons";
import { getLang } from "@/locales";

interface PropsType {
  type: CategoryType.CateType;
  value?: React.ReactText[];
  onChange?: (value: React.ReactText[]) => void;
  placeholder: string;
  add?: boolean;
}
export const CategorySelect: React.FC<PropsType> = props => {
  const { type, value, onChange, placeholder, add = false } = props;

  const [source, loading] = useCategoryType(type);

  return (
    <div className={styles.wrapper}>
      <TreeSelect
        value={value}
        onChange={onChange}
        treeData={source}
        showSearch
        treeCheckable
        showArrow
        treeNodeLabelProp="label"
        treeNodeFilterProp="label"
        treeDefaultExpandAll
        placeholder={placeholder}
        loading={loading}
        style={styles.left}
      />
      {add && (
        <Button icon={<PlusOutlined />} type="primary" className={styles.right}>
          {getLang("common.options.add")}
        </Button>
      )}
    </div>
  );
};
