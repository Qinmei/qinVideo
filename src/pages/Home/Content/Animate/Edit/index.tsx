import { message, Spin, Tabs } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAsync, useAsyncFn } from "react-use";

import { useAction } from "@/action";
import { getLang } from "@/locales";
import { AnimateType } from "@/types";
import { animateDetailToSubmit } from "@/ramda";

import { BaseInfo } from "../Common/BaseInfo";
import { List as EposideList } from "@/pages/Home/Content/Eposide/List/index";

export const Edit = () => {
  const history = useHistory();
  const actions = useAction("animate");
  const { id } = useParams<{ id: string }>();

  const [, submit] = useAsyncFn(
    async (values: AnimateType.FormValues) => {
      console.log(values);
      const res = await actions.updateAnimateItem({ id, ...values });
      message.success(getLang("animate.edit.success"));
      history.goBack();
      return res;
    },
    [history, id]
  );

  const info = useAsync(async () => {
    const res = await actions.getAnimateItem({ id });
    return animateDetailToSubmit(res);
  }, [actions, id]);

  return (
    <Tabs>
      <Tabs.TabPane tab={getLang("common.tabs.baseinfo")} key="baseinfo">
        <Spin spinning={info.loading}>
          <BaseInfo
            submit={submit}
            initialValues={(info?.value as unknown) as AnimateType.FormValues}
          />
        </Spin>
      </Tabs.TabPane>

      <Tabs.TabPane tab={getLang("common.tabs.eposide")} key="eposide">
        <EposideList target={id} onModel="Animate" />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Edit;
