import { useAsync, useAsyncFn, useSessionStorage } from "react-use";

import { HooksType } from "@/types";

const getNow = (expired = 0) => new Date().getTime() + expired * 1000;

export const useSessionCache = <T extends { length: number }>(
  key: string,
  initialState: T,
  initData: () => Promise<T>,
  expired = 600,
  force = true
) => {
  const [state, setState] = useSessionStorage<HooksType.SessionCacheType<T>>(key, {
    data: initialState,
    expired: getNow(force ? 0 : expired),
  });

  const [{ loading }, init] = useAsyncFn(
    async (force = false) => {
      const now = getNow();
      const isExpired = now >= state.expired;
      if (isExpired || force) {
        const res = await initData();
        setState({
          data: res,
          expired: getNow(expired),
        });
      }
    },
    [initData, state]
  );

  useAsync(async () => {
    init();
  }, [state, init]);

  return [state.data, init, loading] as [T, () => void, boolean];
};
