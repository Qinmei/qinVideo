import { useState, useEffect } from "react";
import { useAction } from "@/action";

export const useAdminInit = () => {
  const [init, setInit] = useState(false);
  const actions = useAction("auth");

  const initData = async () => {
    const [status, res] = await actions.initAdmin({});
    if (!status) return;
    setInit(res === "init");
  };

  useEffect(() => {
    initData();
  }, []);

  return [init];
};
