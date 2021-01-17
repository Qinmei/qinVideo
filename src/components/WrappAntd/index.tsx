import { DatePicker } from "antd";
import React from "react";

import { DatePickerProps } from "@/types/antd";
import moment from "moment";

interface PropsType extends Omit<DatePickerProps, "onChange"> {
  onChange?: (value: string) => void;
}
export const WrapDatePicker: React.FC<PropsType> = props => {
  const { value, onChange, ...data } = props;
  const newValue = typeof value === "string" ? moment(value) : value;
  return (
    <DatePicker
      value={newValue}
      onChange={(date, dateString) => onChange && onChange(dateString)}
      {...data}
    />
  );
};
