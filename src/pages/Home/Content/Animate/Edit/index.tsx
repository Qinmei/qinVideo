import { message, Skeleton, Tabs } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAsync, useAsyncFn } from "react-use";

import { useAction } from "@/action";
import { getLang } from "@/locales";
import { AnimateType } from "@/types";

import { BaseInfo } from "../Common/BaseInfo";
import { List as EposideList } from "@/pages/Home/Content/Eposide/List/index";

export const Edit = () => {
  const history = useHistory();
  const actions = useAction("animate");
  const { id } = useParams<{ id: string }>();

  const [, submit] = useAsyncFn(async (values: AnimateType.CreateItemReq) => {
    const res = await actions.updateAnimateItem({ id, ...values });
    message.success(getLang("animate.edit.success"));
    history.goBack();
    return res;
  }, []);

  const info = useAsync(async () => {
    const res = await actions.getAnimateItem({ id });
    return res;
  }, [actions, id]);

  return (
    <Tabs>
      <Tabs.TabPane tab={getLang("common.tabs.baseinfo")} key="baseinfo">
        {info?.value ? <BaseInfo submit={submit} data={info?.value} /> : <Skeleton active />}
      </Tabs.TabPane>

      <Tabs.TabPane tab={getLang("common.tabs.eposide")} key="eposide">
        <EposideList target={id} onModel="Animate" />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Edit;
