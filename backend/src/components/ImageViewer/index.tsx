import { Modal } from "antd";
import React from "react";

import { useModalState } from "@/hooks";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

import styles from "./index.less";

interface ImagePropsType {
  remove: () => void;
  source: string;
}
export const UploadImageViewer: React.FC<ImagePropsType> = props => {
  const { source, remove } = props;
  const [state, methods] = useModalState();

  return (
    <>
      <div className={styles.uploadImgViewer}>
        <img src={source} alt="qinvideo" className={styles.img} />
        <div className={styles.bg}>
          <div className={styles.bgCon}>
            <span className={styles.icon} onClick={methods.show}>
              <EyeOutlined />
            </span>
            <span className={styles.icon} onClick={remove}>
              <DeleteOutlined />
            </span>
          </div>
        </div>
      </div>
      <Modal
        visible={state.visible}
        onCancel={methods.cancel}
        width="900"
        footer={null}
        centered
        bodyStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={source} alt="" className={styles.img} />
      </Modal>
    </>
  );
};

export const ListImageViewer: React.FC<Omit<ImagePropsType, "remove">> = props => {
  const { source } = props;
  const [state, methods] = useModalState();

  return (
    <>
      <div className={styles.listImgViewer} onClick={methods.show}>
        <img src={source} alt="qinvideo" className={styles.img} />
      </div>
      <Modal
        visible={state.visible}
        onCancel={methods.cancel}
        width="900"
        footer={null}
        centered
        bodyStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={source} alt="" className={styles.img} />
      </Modal>
    </>
  );
};
