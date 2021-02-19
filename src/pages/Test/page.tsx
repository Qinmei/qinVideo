import { Form, Input, Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Modules } from "./module";

export default function IndexPage() {
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState([]);
  const handler = (propKey: string | number | symbol, value: unknown) => {
    console.log(propKey, value);
    switch (propKey) {
      case "loading":
        setLoading(value);
        break;
      case "select":
        setSelect(value);
        break;
      default:
        break;
    }
  };
  const { current: module } = useRef(new Modules({ loading: false, select: [] }, handler));

  const update = () => {
    module.update();
  };

  const init = () => {
    module.init();
  };

  console.log(loading, select, module);

  return (
    <>
      <Button type="primary" onClick={init} loading={loading}>
        Init
      </Button>
      <Button type="primary" onClick={update}>
        Update{select.join(",")}
      </Button>
    </>
  );
}
