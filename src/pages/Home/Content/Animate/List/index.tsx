import React, { FC, useEffect } from "react";
import { useModel } from "@/action";
import { ListLayout } from "@/layouts";
import { ListOptions, ListTable } from "@/components";
import { getLang } from "@/locales";
import { useColumns } from "./useColumns";
import { QuickEditForm } from "../Common/QuickEditForm";
import { useMethods } from "./useMethods";

import { AnimateType, CommonType } from "@/types";

import { useListLoading, useSelect } from "../Common/GlobalState";

const initialState: CommonType.ListQuery = {
  page: 1,
  size: 10,
  title: undefined,
  sortBy: undefined,
  sortOrder: undefined,
  area: undefined,
  kind: undefined,
  year: undefined,
  tag: undefined,
  isUpdate: undefined,
  updateDay: undefined,
  status: undefined,
};

const List: FC = () => {
  const [state, methods] = useMethods(initialState);
  const { page, size, title } = state;
  const { init } = methods;

  const [loading] = useListLoading();
  const [select, setSelect] = useSelect();

  const { list, total } = useModel("animate");
  const { columns, SettingBtn } = useColumns(state, methods);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <ListLayout
      options={
        <ListOptions<Omit<AnimateType.UpdateListReq, "ids">>
          selected={select}
          onSubmit={methods.updateMany}
          newPath="/home/animate/add"
          onRemove={methods.removeMany}
        >
          <QuickEditForm />
        </ListOptions>
      }
      placeholder={getLang("animate.title.search")}
      value={title}
      onChange={title => methods.set({ title })}
      setting={SettingBtn}
      reset={methods.reset}
    >
      <ListTable<AnimateType.List>
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
