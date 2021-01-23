import React from "react";
import { Table } from "antd";
import { getLang } from "@/locales";

import { AntdType, CommonType } from "@/types";

interface PropsType<T> {
  loading: boolean;
  total: number;
  list: T[];
  page: number;
  size: number;
  columns: AntdType.ColumnsType<T>;
  onChange: (values: Partial<CommonType.ListQuery>) => void;
  select: string[];
  onSelectChange: (select: string[]) => void;
  rowKey?: string;
}
export const ListTable = <T,>(props: PropsType<T>) => {
  const {
    loading,
    total,
    list,
    page,
    size,
    columns,
    rowKey = "id",
    select,
    onSelectChange,
    onChange,
  } = props;

  const onTableChange = (
    pagination: AntdType.TablePaginationConfig,
    filters: Record<string, (string | number | boolean)[] | null>,
    sorter: AntdType.SorterResult<T> | AntdType.SorterResult<T>[]
  ) => {
    const { current, pageSize } = pagination;
    const { area, kind, year, tag, isUpdate, status, updateDay } = filters;
    const { columnKey, order } = sorter as AntdType.SorterResult<T>;

    onChange({
      page: current as number,
      size: pageSize as number,
      sortBy: order ? (columnKey as string) : undefined,
      sortOrder: order === "ascend" ? 1 : order === "descend" ? -1 : undefined,
      area: area ? (area[0] as string) : undefined,
      kind: kind ? (kind[0] as string) : undefined,
      year: year ? (year[0] as string) : undefined,
      tag: tag ? (tag[0] as string) : undefined,
      isUpdate: isUpdate ? (isUpdate[0] as string) : undefined,
      updateDay: updateDay ? (updateDay[0] as string) : undefined,
      status: status ? (status[0] as string) : undefined,
    });
  };

  return (
    <Table<any>
      sticky
      scroll={{ scrollToFirstRowOnChange: true, x: "max-content" }}
      loading={loading}
      rowKey={rowKey}
      columns={columns}
      onChange={onTableChange}
      dataSource={list}
      showSorterTooltip={false}
      rowSelection={{
        selectedRowKeys: select,
        onChange: val => onSelectChange(val as string[]),
      }}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        total,
        current: page,
        pageSize: size,
        pageSizeOptions: ["10", "20", "30", "50", "100"],
        showTotal: total => getLang("commonents.table.total", { total }),
      }}
    />
  );
};
