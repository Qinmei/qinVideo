import React, { FC, useCallback, useEffect } from "react";
import { Button, Form, Table } from "antd";
import { useAsyncFn } from "react-use";
import { Link } from "react-router-dom";
import { useAction, useModel } from "@/action";
import { useSavedState } from "@/hooks";
import { ListLayout } from "@/layouts";
import { ListOptions } from "@/components";
import { getLang } from "@/locales";
import moment from "moment";

import { AntdType, AnimateType, GlobalType } from "@/types";

const initState = {
  page: 1,
  size: 10,
};

const List: FC = () => {
  const [state, setState] = useSavedState(initState);

  const actions = useAction("animate");
  const { list, total } = useModel("animate");

  const [{ loading }, initData] = useAsyncFn(
    async (data: GlobalType.ListQuery) => {
      await actions.getAnimateList(data);
    },
    [actions]
  );

  useEffect(() => {
    initData(state);
  }, [initData, state]);

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
      // filters: Object.values(tableUpdate),
      // filterMultiple: false,
      // render: val =>getLang(val ? "common.update.in" : "common.update.out")
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
    // {
    //   title: getLang("animate.status"),
    //   dataIndex: "status",
    //   filters: Object.values(tableStatus), // eslint-disable-line
    //   filterMultiple: false,
    //   render(val) {
    //     return <Badge status={tableStatus[val].badge} text={tableStatus[val].text} />;
    //   },
    //   align: "center",
    // },
    {
      title: getLang("animate.updatedTime"),
      dataIndex: "updatedAt",
      sorter: true,
      width: 120,
      align: "center",
      render: val => moment(val).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: getLang("animate.option"),
      key: "action",
      dataIndex: "id",
      align: "center",
    },
  ];

  return (
    <>
      <ListLayout
        options={
          <ListOptions
            selected={[]}
            submit={() => true}
            newPath="/home/animate/add"
            remove={async () => console.log("sdsd")}
          >
            <></>
          </ListOptions>
        }
        search={<></>}
        setting={<></>}
      >
        <Table
          loading={loading}
          rowKey="id"
          columns={columns}
          // onChange={this.onChangeTable}
          dataSource={list}
          pagination={{}}
        />
      </ListLayout>
    </>
  );
};

export default List;
