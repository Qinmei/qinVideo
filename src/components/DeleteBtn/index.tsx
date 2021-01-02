import React from "react";
import { Button, Modal } from "antd";
import { getLang } from "@/locales";
import { useAsyncFn } from "react-use";

interface PropsType {
  deleteCall: () => unknown;
  initCall: () => void;
  title: string;
}
export const DeleteBtn: React.FC<PropsType> = props => {
  const { deleteCall, initCall, title } = props;

  const [, remove] = useAsyncFn(async () => {
    const res = await deleteCall();
    res && initCall();
  }, [deleteCall, initCall]);

  const removeCall = () => {
    Modal.confirm({
      title: getLang("animate.delete.title"),
      content: getLang("animate.delete.tips", { title }),
      onOk: remove,
    });
  };
  return (
    <Button type="link" onClick={removeCall}>
      {getLang("common.options.delete")}
    </Button>
  );
};
