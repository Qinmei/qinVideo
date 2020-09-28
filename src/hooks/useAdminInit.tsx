import { useState, useEffect, useCallback } from "react";
import { useAction } from "@/action";

export const useAdminInit = () => {
  const [init, setInit] = useState(false);
  const actions = useAction("auth");

  const initData = useCallback(async () => {
    const [status, res] = await actions.exist({});
    if (!status) return;
    setInit(res === "init");
  }, [actions]);

  useEffect(() => {
    initData();
  }, [initData]);

  return [init];
};
