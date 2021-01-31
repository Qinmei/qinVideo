import { useCallback, useRef, useState } from "react";
import { Button, Space, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { getLang, LanguageKeys } from "@/locales";
import { FormModal, FormModalMethods } from "@/components";
import { MoreOptions } from "./more";

import { HooksType } from "@/types";

interface PropsType<T> {
  children: React.ReactElement;
  onSubmit: (values: T) => Promise<boolean> | boolean;
  onAdd?: (values: T) => Promise<boolean>;
  onRemove: (type: "all" | "many") => Promise<unknown>;
  newPath?: string;
  selected: string[];
}
export const ListOptions = <T,>(props: PropsType<T>) => {
  const { children, onSubmit, onRemove, onAdd, selected, newPath } = props;
  const [title, setTitle] = useState<"add" | "many" | "all">("many");

  const ref = useRef<FormModalMethods>(null);

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
        return onSubmit(values);
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
      submit={submitCall}
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
          <MoreOptions onChange={value => moreCall(value, methods)} />
        </Space>
      )}
      ref={ref}
    >
      {children}
    </FormModal>
  );
};
