import React from "react";
import { Tabs } from "antd";
import { getLang } from "@/locales";
import { BaseInfo } from "../Common/BaseInfo";
import { AnimateType } from "@/types";

const Add = () => {
  return (
    <Tabs>
      <Tabs.TabPane tab={getLang("common.add.baseinfo")}>
        <BaseInfo />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Add;
