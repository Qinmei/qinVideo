import { useCallback, useRef } from "react";
import { Button, Space, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { getLang, LanguageKeys } from "@/locales";
import { FormModal, FormModalMethods } from "@/components";
import { MoreOptions } from "./more";

import { HooksType } from "@/types";

interface PropsType<T> {
  children: React.ReactElement;
  submit: (values: T) => Promise<boolean> | boolean;
  remove: (type: "all" | "many") => Promise<unknown>;
  newPath: string;
  selected: string[];
}
export const ListOptions = <T,>(props: PropsType<T>) => {
  const { children, submit, remove, selected, newPath } = props;

  const ref = useRef<FormModalMethods>(null);

  const history = useHistory();

  const goToNew = useCallback(
    (methods: HooksType.ModalStateMethods) => {
      if (newPath) {
        history.push(newPath);
      } else {
        methods.show();
      }
    },
    [newPath, history]
  );

  const removeCall = useCallback(
    (type: "many" | "all") => {
      Modal.confirm({
        title: getLang(`common.options.delete.${type}.title` as LanguageKeys),
        content: getLang(`common.options.delete.${type}.tips` as LanguageKeys),
        onOk: () => remove(type),
      });
    },
    [remove]
  );

  const moreCall = useCallback(
    (type: string, methods: HooksType.ModalStateMethods) => {
      if (type === "delete") {
        removeCall("all");
      } else {
        methods.show();
      }
    },
    [removeCall]
  );

  return (
    <FormModal<T>
      submit={submit}
      title={getLang("common.options")}
      content={methods => (
        <Space size="middle">
          <Button type="primary" icon={<PlusOutlined />} onClick={() => goToNew(methods)}>
            {getLang("common.options.add")}
          </Button>
          {!!selected.length && (
            <>
              <Button onClick={methods.show}>{getLang("common.options.edit.many")}</Button>
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
