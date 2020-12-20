import { useState } from "react";
import { useAsync } from "react-use";
import { useAction } from "@/action";

export const useAuthInit = () => {
  const [init, setInit] = useState(false);
  const action = useAction("auth");

  useAsync(async () => {
    const res = await action.exist();
    setInit(res === "init");
  }, [action]);

  return [init];
};
