import { useCallback, useState } from "react";
import { Button, Space, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { getLang, LanguageKeys } from "@/locales";
import { FormModal } from "@/components";
import { MoreOptions } from "./more";

import { HooksType } from "@/types";

interface PropsType<T> {
  children: React.ReactElement;
  onSubmit: (values: T) => Promise<unknown>;
  onAdd?: (values: T) => Promise<unknown>;
  onRemove: (type: "all" | "many") => Promise<unknown>;
  newPath?: string;
  selected: string[];
  noAllOption?: boolean;
}
export const ListOptions = <T,>(props: PropsType<T>) => {
  const { children, onSubmit, onRemove, onAdd, selected, newPath, noAllOption } = props;
  const [title, setTitle] = useState<"add" | "many" | "all">("many");

  const history = useHistory();

  const goToNew = useCallback(
    (methods: HooksType.ModalStateMethods) => {
      if (newPath) {
        history.push(newPath);
      } else {
        setTitle("add");
        methods.show();
      }
    },
    [newPath, history]
  );

  const submitCall = useCallback(
    (values: T) => {
      if (title === "add") {
        return (onAdd && onAdd(values)) as Promise<boolean>;
      } else {
        return onSubmit(values) as Promise<boolean>;
      }
    },
    [onSubmit, title, onAdd]
  );

  const removeCall = useCallback(
    (type: "many" | "all") => {
      Modal.confirm({
        title: getLang(`common.options.delete.${type}.title` as LanguageKeys),
        content: getLang(`common.options.delete.${type}.tips` as LanguageKeys),
        onOk: () => onRemove(type),
      });
    },
    [onRemove]
  );

  const editCall = useCallback((methods: HooksType.ModalStateMethods) => {
    setTitle("many");
    methods.show();
  }, []);

  const moreCall = useCallback(
    (type: string, methods: HooksType.ModalStateMethods) => {
      if (type === "delete") {
        removeCall("all");
      } else {
        setTitle("all");
        methods.show();
      }
    },
    [removeCall]
  );

  return (
    <FormModal<T>
      onSubmit={submitCall}
      title={getLang(
        title === "add" ? "common.options.add" : (`common.options.edit.${title}` as LanguageKeys)
      )}
      content={methods => (
        <Space size="middle">
          <Button type="primary" icon={<PlusOutlined />} onClick={() => goToNew(methods)}>
            {getLang("common.options.add")}
          </Button>
          {!!selected.length && (
            <>
              <Button onClick={() => editCall(methods)}>
                {getLang("common.options.edit.many")}
              </Button>
              <Button danger onClick={() => removeCall("many")}>
                {getLang("common.options.delete.many")}
              </Button>
            </>
          )}
          {!noAllOption && <MoreOptions onChange={value => moreCall(value, methods)} />}
        </Space>
      )}
    >
      {children}
    </FormModal>
  );
};
