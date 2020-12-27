import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import moment from "moment";
import { getLang } from "@/locales";
import { timeFormatAll, statusSource, updateSource } from "@/constants";

import { AntdType, AnimateType } from "@/types";

export const useColumns = () => {
  console.log(statusSource, updateSource);
  const columns: AntdType.ColumnsType<AnimateType.List> = [
    {
      title: getLang("animate.title"),
      dataIndex: "title",
      key: "title",
      sorter: true,
      render: (text, record) => <Link to={`/home/animate/slug/${record.id}`}>{text}</Link>,
    },
    {
      title: getLang("animate.slug"),
      dataIndex: "slug",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.author"),
      dataIndex: "author.name",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.update"),
      dataIndex: "isUpdate",
      align: "center",
      filters: updateSource,
      filterMultiple: false,
      render: val => getLang(val ? "common.select.updating" : "common.select.updated"),
    },
    {
      title: getLang("animate.eposide"),
      dataIndex: "countEposide",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.comment"),
      dataIndex: "countComment",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.danmu"),
      dataIndex: "countDanmu",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.play"),
      dataIndex: "countPlay",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("rate.rateStar"),
      dataIndex: "countStar",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("rate.rateCount"),
      dataIndex: "countRate",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.like"),
      dataIndex: "countLike",
      sorter: true,
      align: "center",
    },
    {
      title: getLang("animate.level"),
      dataIndex: "level",
      sorter: true,
      align: "center",
    },
    // {
    //   title: getLang("animate.category.area"),
    //   dataIndex: "area",
    //   // filters: table.area,
    //   // filterMultiple: false,
    //   // render: val => val.map(item => item.name).join(","),
    // },
    // {
    //   title: getLang("animate.category.year"),
    //   dataIndex: "year",
    //   // filters: table.year,
    //   // filterMultiple: false,
    //   // render: val => val.map(item => item.name).join(","),
    // },
    // {
    //   title: getLang("animate.category.kind"),
    //   dataIndex: "kind",
    //   // filterMultiple: false,
    //   // filters: table.kind,
    //   // render: val => val.map(item => item.name).join(","),
    // },
    // {
    //   title: getLang("animate.category.tag"),
    //   dataIndex: "tag",
    //   // filterMultiple: false,
    //   // filters: table.tag,
    //   // width: 120,
    //   // render: val => val.map(item => item.name).join(","),
    // },
    {
      title: getLang("animate.status"),
      dataIndex: "status",
      filters: Object.values(statusSource),
      filterMultiple: false,
      render: (val: string) => (
        <Badge status={statusSource[val].badge} text={statusSource[val].text} />
      ),
      align: "center",
    },
    {
      title: getLang("animate.updatedTime"),
      dataIndex: "updatedAt",
      sorter: true,
      width: 120,
      align: "center",
      render: val => moment(val).format(timeFormatAll),
    },
    {
      title: getLang("animate.option"),
      key: "action",
      dataIndex: "id",
      align: "center",
    },
  ];
  return { columns };
};
