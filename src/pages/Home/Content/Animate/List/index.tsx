import React, { FC, useState, useEffect } from "react";
import { useAsyncFn } from "react-use";
import { useModel } from "@/action";
import { ListLayout } from "@/layouts";
import { ListOptions, ListTable } from "@/components";
import { getLang } from "@/locales";
import { useColumns } from "./useColumns";
import { EditForm } from "./form";
import { useMethods } from "./useMethods";

import { AnimateType } from "@/types";

const List: FC = () => {
  const [select, setSelect] = useState<string[]>([]);
  const [state, methods] = useMethods(select, setSelect);
  const { page, size, title } = state;

  const { list, total } = useModel("animate");

  const [{ loading }, initData] = useAsyncFn(async () => {
    await methods.init();
  }, [methods.init]);

  const { columns, SettingBtn } = useColumns(state, methods);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <ListLayout
      options={
        <ListOptions<Omit<AnimateType.UpdateListReq, "ids">>
          selected={select}
          submit={methods.updateMany}
          newPath="/home/animate/add"
          remove={methods.removeMany}
        >
          <EditForm />
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
