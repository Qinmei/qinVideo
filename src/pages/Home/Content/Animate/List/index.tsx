import React, { FC } from "react";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ListLayout } from "@/layouts";
import { FormModal } from "@/components";

const List: FC = () => {
  return (
    <ListLayout
      options={
        <>
          <FormModal
            content={<Button icon={<PlusOutlined />} />}
            submit={val => {
              return false;
            }}
          >
            <Form />
          </FormModal>
        </>
      }
      search={<></>}
      setting={<></>}
    >
      sss
    </ListLayout>
  );
};

export default List;
