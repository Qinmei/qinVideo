import { AntdType } from "@/types";

export interface TableChangeType {
  page: number;
  size: number;
}

export interface ColumnsSettingMethods {
  reset: () => void;
  allToggle: () => void;
  sync: (value: string[]) => void;
}

export interface ColumnType<T> extends AntdType.ColumnType<T> {
  preset?: boolean;
}

export interface ColumnGroupType<RecordType> extends Omit<ColumnType<RecordType>, "dataIndex"> {
  children: ColumnsType<RecordType>;
}

export type ColumnsType<RecordType = unknown> = (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[];
