import { Space, Switch, Tag, Tooltip } from "antd";
import moment from "moment";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { columnsSorter, DeleteBtn, QuickEdit, ListImageViewer } from "@/components";
import { timeFormatAll } from "@/constants";
import { useColumnsSetting } from "@/hooks";
import { getLang } from "@/locales";
import { CommonType, ComponentsType, EposideType } from "@/types";

import { EditForm } from "../Common/QuickEditForm";

const TagShow = (props: { data: EposideType.ArrValueType[] }) => {
  const { data } = props;
  return (
    <>
      {data.length
        ? data.map(item => (
            <div style={{ lineHeight: "30px" }} key={item._id}>
              <Tooltip placement="top" title={item.value}>
                <Tag>{item.name}</Tag>
              </Tooltip>
            </div>
          ))
        : getLang("common.tips.nodata")}
    </>
  );
};

export const useColumns = (
  state: CommonType.ListQuery,
  methods: CommonType.ListMethods<EposideType.UpdateItemReq>
) => {
  const columnsOrigin: ComponentsType.ColumnsType<EposideType.EposideItem> = useMemo(
    () => [
      {
        title: getLang("eposide.title"),
        ...columnsSorter(state, "title", true),
        align: "left",
        width: 250,
      },
      {
        title: getLang("eposide.target"),
        dataIndex: "target",
        key: "target",
        preset: true,
        width: 200,
        render: val => <Link to={`/home/animate/edit/${val.id}`}>{val.title}</Link>,
      },
      {
        title: getLang("eposide.sort"),
        ...columnsSorter(state, "sort", true),
      },
      {
        title: getLang("eposide.cover"),
        dataIndex: "cover",
        key: "cover",
        preset: true,
        align: "center",
        render: val => (val ? <ListImageViewer source={val} /> : getLang("common.tips.nodata")),
      },
      {
        title: getLang("eposide.link"),
        dataIndex: "link",
        key: "link",
        preset: true,
        align: "center",
        render: val => <TagShow data={val} />,
      },
      {
        title: getLang("eposide.subtitle"),
        dataIndex: "subtitle",
        key: "subtitle",
        preset: true,
        align: "center",
        render: val => <TagShow data={val} />,
      },
      {
        title: getLang("eposide.bilibili"),
        dataIndex: "bilibili",
        key: "bilibili",
        preset: true,
        align: "center",
        render: val => val || getLang("common.tips.nodata"),
      },
      {
        title: getLang("eposide.noSetPrefix"),
        dataIndex: "noSetPrefix",
        key: "noSetPrefix",
        preset: true,
        align: "center",
        render: val => <Switch disabled={true} checked={val} />,
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
            <QuickEdit<EposideType.EposideItem, EposideType.UpdateItemReq>
              data={record}
              submit={methods.update}
              init={methods.init}
            >
              <EditForm />
            </QuickEdit>
            <DeleteBtn title={record.title} onDelete={() => methods.remove(text)} />
          </Space>
        ),
      },
    ],
    [state, methods]
  );

  const { columns, SettingBtn } = useColumnsSetting<EposideType.EposideItem>(
    columnsOrigin,
    "eposideColumns"
  );
  return { columns, SettingBtn };
};
