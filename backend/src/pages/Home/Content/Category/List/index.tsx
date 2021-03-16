import React, { FC, useEffect } from "react";
import { Space } from "antd";
import { useModel } from "@/action";
import { ListOptions, ListTable } from "@/components";
import { ListLayout } from "@/layouts";
import { getLang } from "@/locales";
import { CommonType, EposideType } from "@/types";

import { useSelect, useListLoading } from "../Common/GlobalState";
import { EditForm } from "../Common/EditForm";
import { useColumns } from "./useColumns";
import { useMethods } from "./useMethods";
import { AddMany } from "../Common/AddMany";

const initState: CommonType.ListQuery = {
  page: 1,
  size: 10,
  title: undefined,
  sortBy: undefined,
  sortOrder: undefined,
};

interface PropsType {
  target: string;
  onModel: EposideType.OnModelType;
}
export const List: FC<PropsType> = props => {
  const { target, onModel } = props;
  const [state, methods] = useMethods(initState, target, onModel);
  const [select, setSelect] = useSelect();
  const [loading] = useListLoading();

  const { page, size, title } = state;
  const { init } = methods;

  const { list, total } = useModel("eposide");

  const { columns, SettingBtn } = useColumns(state, methods);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <ListLayout
      options={
        <Space>
          <ListOptions<Omit<EposideType.EposideItem, "id">>
            selected={select}
            onSubmit={methods.updateMany}
            onRemove={methods.removeMany}
            onAdd={methods.create}
            noAllOption
          >
            <EditForm full />
          </ListOptions>
          <AddMany target={target} onModel={onModel} onSubmit={methods.createMany} />
        </Space>
      }
      placeholder={getLang("eposide.title.search")}
      value={title}
      onChange={title => methods.set({ title })}
      setting={SettingBtn}
      reset={methods.reset}
    >
      <ListTable<EposideType.EposideItem>
        loading={loading}
        columns={columns}
        page={page}
        size={size}
        total={total}
        list={list}
        select={select}
        onSelectChange={setSelect}
        onChange={methods.set}
      />
    </ListLayout>
  );
};

export default List;
