import { Button, Input } from "antd";
import { clone } from "ramda";
import React, { useCallback } from "react";

import { getLang } from "@/locales";
import { EposideType } from "@/types";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import styles from "./index.less";

interface PropsType {
  value?: EposideType.ArrValueType[];
  onChange?: (value: EposideType.ArrValueType[]) => void;
}

export const FormEposideList: React.FC<PropsType> = props => {
  const { value = [], onChange } = props;

  const add = useCallback(() => {
    const newVal = [
      ...value,
      {
        name: "",
        value: "",
      },
    ];
    onChange && onChange(newVal);
  }, [value, onChange]);

  const remove = useCallback(
    (index: number) => {
      const newVal = clone(value);
      newVal.splice(index, 1);
      onChange && onChange(newVal);
    },
    [value, onChange]
  );

  const update = useCallback(
    (index: number, type: "name" | "value", val: string) => {
      const newVal = clone(value);
      newVal[index][type] = val;
      onChange && onChange(newVal);
    },
    [value, onChange]
  );

  return (
    <div className={styles.container}>
      {value.map((eposide, index) => (
        <div className={styles.list} key={eposide ? eposide._id : index}>
          <Input
            value={eposide.name}
            placeholder={getLang("episode.multi.name.tips")}
            onChange={e => update(index, "name", e.target.value)}
            className={styles.label}
          />

          <Input
            value={eposide.value}
            placeholder={getLang("episode.multi.value.tips")}
            onChange={e => update(index, "value", e.target.value)}
            className={styles.value}
          />

          <DeleteOutlined onClick={() => remove(index)} />
        </div>
      ))}
      <div className={styles.option}>
        <Button type="dashed" onClick={add} icon={<PlusOutlined />}>
          {getLang("common.options.add")}
        </Button>
      </div>
    </div>
  );
};
