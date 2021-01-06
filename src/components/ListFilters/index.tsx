import { Button, Empty, Input, Radio } from "antd";
import React, { useCallback, useMemo, useState } from "react";

import { useCategoryType } from "@/hooks";
import { getLang } from "@/locales";
import { AntdType, CategoryType } from "@/types";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./index.less";

interface PropsType {
  type: CategoryType.CateType;
  setSelectedKeys: (values: React.ReactText[]) => void;
  selectedKeys: React.ReactText[];
  confirm: () => void;
  clearFilters?: () => void;
}
export const ListFilters: React.FC<PropsType> = props => {
  const { type, setSelectedKeys, selectedKeys, confirm, clearFilters } = props;

  const [query, setQuery] = useState<string>("");
  const [value, setValue] = useState<React.ReactText>(selectedKeys[0]);
  const [source, loading] = useCategoryType(type);

  const onChangeCall = useCallback((e: AntdType.RadioChangeEvent) => setValue(e.target.value), [
    setValue,
  ]);

  const submit = useCallback(() => {
    setSelectedKeys([value]);
    confirm();
  }, [setSelectedKeys, confirm, value]);

  const reset = useCallback(() => {
    clearFilters && clearFilters();
    setValue("");
  }, [clearFilters, setValue]);

  const data = useMemo(() => source.filter(item => new RegExp(query).test(item.label)), [
    source,
    query,
  ]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Input.Search onSearch={setQuery} placeholder={getLang("components.table.filter.search")} />
      </div>
      <div className={styles.content}>
        {data.length ? (
          <Radio.Group onChange={onChangeCall} value={value}>
            {data.map(item => (
              <Radio className={styles.list} value={item.value} key={item.value}>
                {item.label}
              </Radio>
            ))}
          </Radio.Group>
        ) : (
          <Empty />
        )}
      </div>
      <div className={styles.footer}>
        <Button type="link" disabled={!value} size="small" onClick={reset}>
          {getLang("common.options.reset")}
        </Button>
        {loading && <LoadingOutlined />}
        <Button type="primary" size="small" onClick={submit}>
          {getLang("common.options.ok")}
        </Button>
      </div>
    </div>
  );
};
