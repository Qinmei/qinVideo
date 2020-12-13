import { useState } from "react";
import { useAsync } from "react-use";
import { useAction } from "@/action";

export const useAdminInit = () => {
  const [init, setInit] = useState(false);
  const actions = useAction("auth");

  useAsync(async () => {
    const res = await actions.exist({});
    setInit(res === "init");
  }, [actions]);

  return [init];
};
