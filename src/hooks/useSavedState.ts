import { useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSetState } from "react-use";

import { GlobalType } from "@/types";

export const useSavedState = <T extends GlobalType.ListQuery>(
  initialState: T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const history = useHistory();
  const { state: historyState = {} as T, pathname } = useLocation<T>();

  const [state, setState] = useSetState<T>({ ...initialState, ...historyState });

  const replace = useCallback(() => {
    history.replace({
      pathname,
      state,
    });
  }, [history, pathname, state]);

  useEffect(replace, [state]);

  return [state, setState];
};
