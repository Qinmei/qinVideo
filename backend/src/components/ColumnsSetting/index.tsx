import React from "react";
import { Popover, Tooltip, Checkbox, Button, Badge, Typography, Tag } from "antd";
import { ListFilters } from "@/components";
import { SettingOutlined } from "@ant-design/icons";
import { getLang } from "@/locales";
import styles from "./index.less";

import { ComponentsType, CommonType, CategoryType } from "@/types";

interface PropsType {
  source: { key: string; title: string }[];
  select: string[];
  methods: ComponentsType.ColumnsSettingMethods;
}
export const ColumnsSetting: React.FC<PropsType> = props => {
  const { source, select, methods } = props;

  return (
    <Popover
      arrowPointAtCenter
      title={<Header select={select} length={source.length} methods={methods} />}
      trigger="click"
      placement="bottomRight"
      content={<Content select={select} selectChange={methods.sync} source={source} />}
      getPopupContainer={node => node.parentNode as HTMLElement}
    >
      <Tooltip title={getLang("components.table.setting.title")}>
        <Button type="dashed" icon={<SettingOutlined />} />
      </Tooltip>
    </Popover>
  );
};

interface HeaderProps {
  select: string[];
  length: number;
  methods: ComponentsType.ColumnsSettingMethods;
}
const Header = (props: HeaderProps) => {
  const { select, length, methods } = props;
  return (
    <div className={styles.header}>
      <Checkbox
        indeterminate={!!select.length && select.length < length}
        checked={select.length === length}
        onChange={methods.allToggle}
      >
        {getLang("components.table.setting.all")}
      </Checkbox>
      <Button onClick={methods.reset} type="link">
        {getLang("components.table.setting.reset")}
      </Button>
    </div>
  );
};

interface ContentProps {
  select: string[];
  selectChange: (select: string[]) => void;
  source: { key: string; title: string }[];
}
const Content = (props: ContentProps) => {
  const { select, selectChange, source } = props;
  return (
    <div className={styles.header}>
      <Checkbox.Group value={select} onChange={val => selectChange(val as string[])}>
        {source.map(item => (
          <div className="list" key={item.key}>
            <Checkbox value={item.key}>{item.title}</Checkbox>
          </div>
        ))}
      </Checkbox.Group>
    </div>
  );
};

export const columnsSorter = (
  state: CommonType.ListQuery,
  key: string,
  preset = false
): Pick<
  ComponentsType.ColumnType<unknown>,
  "dataIndex" | "key" | "preset" | "align" | "width" | "sorter" | "sortOrder"
> => {
  return {
    dataIndex: key,
    key,
    preset,
    align: "center",
    width: 120,
    sorter: true,
    sortOrder:
      state.sortBy === key
        ? state.sortOrder === 1
          ? "ascend"
          : state.sortOrder === -1
          ? "descend"
          : null
        : null,
  };
};

export const columnsFilter = (
  state: CommonType.ListQuery,
  source: CommonType.SelectType<string>,
  key: string,
  preset = false
): Pick<
  ComponentsType.ColumnType<unknown>,
  | "dataIndex"
  | "key"
  | "preset"
  | "align"
  | "width"
  | "filters"
  | "filtered"
  | "filteredValue"
  | "filterMultiple"
  | "render"
> => {
  const stateFilterValue = state[key as keyof CommonType.ListQuery];
  return {
    dataIndex: key,
    key,
    preset,
    align: "center",
    filters: Object.values(source),
    filtered: !!stateFilterValue,
    filteredValue: stateFilterValue ? [stateFilterValue] : [],
    filterMultiple: false,
    width: 120,
    render: (val: string) => (
      <>
        <Badge status={source[val.toString()].badge} />
        <Typography.Text>{source[val.toString()].text}</Typography.Text>
      </>
    ),
  };
};

export const columnsFilterRequest = (
  state: CommonType.ListQuery,
  key: string,
  preset = false,
  type: CategoryType.CateType
): Pick<
  ComponentsType.ColumnType<unknown>,
  | "dataIndex"
  | "key"
  | "preset"
  | "align"
  | "width"
  | "filters"
  | "filtered"
  | "filteredValue"
  | "filterMultiple"
  | "filterDropdown"
  | "render"
> => {
  const stateFilterValue = state[key as keyof CommonType.ListQuery];
  return {
    dataIndex: key,
    key,
    preset,
    width: 200,
    align: "center",
    filtered: !!stateFilterValue,
    filteredValue: stateFilterValue ? [stateFilterValue] : [],
    filterMultiple: false,
    filterDropdown: methods => <ListFilters {...methods} type={type} />,
    render: (val: CategoryType.List[]) => val.map(item => <Tag key={item.id}> {item.name}</Tag>),
  };
};
