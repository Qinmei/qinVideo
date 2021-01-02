import React from "react";
import { Button } from "antd";
import { getLang } from "@/locales";
import { FormModal } from "@/components";

interface PropsType<T, K> {
  data: T;
  submit: (values: K) => Promise<unknown>;
  init: () => void;
  children: React.ReactElement;
}
export const QuickEdit = <T extends { id: string }, K>(props: PropsType<T, K>) => {
  const { data, submit, init, children } = props;

  const onSubmitCall = async (values: K) => {
    const res = await submit({ ...values, id: data.id });
    res && init();
    return !!res;
  };

  const formNode = React.cloneElement(children, { data });
  return (
    <>
      <FormModal
        title={getLang("common.options.edit")}
        content={methods => (
          <Button type="link" onClick={methods.show}>
            {getLang("common.options.edit")}
          </Button>
        )}
        submit={onSubmitCall}
      >
        {formNode}
      </FormModal>
    </>
  );
};
