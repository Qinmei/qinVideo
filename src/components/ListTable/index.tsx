import React from "react";
import { Table } from "antd";
import { getLang } from "@/locales";

import { AntdType } from "@/types";

interface PropsType<T> {
  loading: boolean;
  total: number;
  list: T[];
  page: number;
  size: number;
  rowKey?: string;
  columns: AntdType.ColumnsType<T>;
  pageSizeChange: (values: { page: number; size: number }) => void;
}
export const ListTable = <T extends Record<string, unknown>>(props: PropsType<T>) => {
  const { loading, total, list, page, size, columns, rowKey = "id", pageSizeChange } = props;

  const onPageSizeChange = (page: number, pageSize?: number) => {
    pageSizeChange({ page, size: pageSize || size });
  };

  const onFilterChange = (
    pagination: AntdType.TablePaginationConfig,
    filters: Record<string, React.ReactText[] | null>,
    sorter: AntdType.SorterResult<T> | AntdType.SorterResult<T>[]
  ) => {
    console.log(pagination, filters, sorter);
  };

  return (
    <Table<T>
      sticky
      loading={loading}
      rowKey={rowKey}
      columns={columns}
      onChange={onFilterChange}
      dataSource={list}
      showSorterTooltip={false}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        total,
        onChange: onPageSizeChange,
        current: page,
        pageSize: size,
        pageSizeOptions: ["10", "20", "30", "50", "100"],
        showTotal: total => getLang("commonents.table.total", { total }),
      }}
    />
  );
};
