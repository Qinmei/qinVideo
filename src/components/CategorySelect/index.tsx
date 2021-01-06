import React from "react";
import { TreeSelect } from "antd";
import { useCategoryType } from "@/hooks";

import { CategoryType } from "@/types";

interface PropsType {
  type: CategoryType.CateType;
  value?: React.ReactText[];
  onChange?: (value: React.ReactText[]) => void;
  placeholder: string;
}
export const CategorySelect: React.FC<PropsType> = props => {
  const { type, value, onChange, placeholder } = props;

  const [source, loading] = useCategoryType(type);

  return (
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
    />
  );
};
