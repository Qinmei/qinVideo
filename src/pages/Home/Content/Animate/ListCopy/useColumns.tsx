import { Space } from "antd";
import moment from "moment";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import {
  columnsFilter,
  columnsFilterRequest,
  columnsSorter,
  DeleteBtn,
  QuickEdit,
} from "@/components";
import { timeFormatAll } from "@/constants";
import { statusSource, updateDaySource, updateSource } from "@/constants/select";
import { useColumnsSetting } from "@/hooks";
import { getLang } from "@/locales";
import { animateDetailToSubmit } from "@/ramdas";
import { AnimateType, CommonType, ComponentsType } from "@/types";

import { QuickEditForm } from "../Common/QuickEditForm";

export const useColumns = (
  state: CommonType.ListQuery,
  methods: CommonType.ListMethods<AnimateType.UpdateItemReq>
) => {
  const columnsOrigin: ComponentsType.ColumnsType<AnimateType.List> = useMemo(
    () => [
      {
        title: getLang("animate.title"),
        ...columnsSorter(state, "title", true),
        width: 300,
        align: "left",
        render: (text, record) => <Link to={`/home/animate/edit/${record.id}`}>{text}</Link>,
      },
      {
        title: getLang("animate.slug"),
        ...columnsSorter(state, "slug", true),
        width: 140,
      },
      {
        title: getLang("animate.author"),
        ...columnsSorter(state, "author", true),
        dataIndex: ["author", "name"],
      },
      {
        title: getLang("animate.update"),
        ...columnsFilter(state, updateSource, "isUpdate", true),
      },
      {
        title: getLang("animate.updateDay"),
        ...columnsFilter(state, updateDaySource, "updateDay", true),
      },
      {
        title: getLang("animate.eposide"),
        ...columnsSorter(state, "countEposide", true),
      },
      {
        title: getLang("animate.comment"),
        ...columnsSorter(state, "countComment", true),
      },
      {
        title: getLang("animate.danmu"),
        ...columnsSorter(state, "countDanmu"),
      },
      {
        title: getLang("animate.play"),
        ...columnsSorter(state, "countPlay"),
      },
      {
        title: getLang("rate.rateStar"),
        ...columnsSorter(state, "countStar"),
      },
      {
        title: getLang("rate.rateCount"),
        ...columnsSorter(state, "countRate"),
      },
      {
        title: getLang("animate.like"),
        ...columnsSorter(state, "countLike"),
      },
      {
        title: getLang("animate.level"),
        ...columnsSorter(state, "level"),
      },
      {
        title: getLang("animate.category.area"),
        ...columnsFilterRequest(state, "area", false, "aarea"),
      },
      {
        title: getLang("animate.category.year"),
        ...columnsFilterRequest(state, "year", false, "ayear"),
      },
      {
        title: getLang("animate.category.kind"),
        ...columnsFilterRequest(state, "kind", false, "akind"),
      },
      {
        title: getLang("animate.category.tag"),
        ...columnsFilterRequest(state, "tag", false, "atag"),
      },
      {
        title: getLang("animate.status"),
        ...columnsFilter(state, statusSource, "status", true),
      },
      {
        title: getLang("animate.updatedTime"),
        ...columnsSorter(state, "updatedAt", true),
        render: val => moment(val).format(timeFormatAll),
      },
      {
        title: getLang("animate.option"),
        key: "option",
        preset: true,
        dataIndex: "id",
        align: "center",
        fixed: "right",
        width: 160,
        render: (text, record) => (
          <Space>
            <QuickEdit<AnimateType.UpdateItemReq>
              onSubmit={methods.update}
              initialValues={animateDetailToSubmit(record)}
            >
              <QuickEditForm full />
            </QuickEdit>
            <DeleteBtn title={record.title} onDelete={() => methods.remove(text)} />
          </Space>
        ),
      },
    ],
    [state, methods]
  );

  const { columns, SettingBtn } = useColumnsSetting<AnimateType.List>(
    columnsOrigin,
    "animateColumns"
  );
  return { columns, SettingBtn };
};
