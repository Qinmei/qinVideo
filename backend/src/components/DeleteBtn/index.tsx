import React from "react";
import { Button, Modal } from "antd";
import { getLang } from "@/locales";

interface PropsType {
  onDelete: () => Promise<unknown>;
  title: string;
}
export const DeleteBtn: React.FC<PropsType> = props => {
  const { onDelete, title } = props;

  const removeCall = () => {
    Modal.confirm({
      title: getLang("animate.delete.title"),
      content: getLang("animate.delete.tips", { title }),
      onOk: onDelete,
    });
  };
  return (
    <Button type="link" onClick={removeCall}>
      {getLang("common.options.delete")}
    </Button>
  );
};
