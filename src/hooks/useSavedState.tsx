import { useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSetState } from "react-use";

import { CommonType } from "@/types";

export const useSavedState = <T extends CommonType.ListQuery, K extends string>(
  initialState: T,
  namespace?: K
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const history = useHistory();
  const { state: historyState = {} as K extends string ? Record<K, T> : T, pathname } = useLocation<
    K extends string ? Record<K, T> : T
  >();

  const urlState = namespace ? historyState[namespace] : historyState;
  const [state, setState] = useSetState<T>({ ...initialState, ...urlState });

  const replace = useCallback(() => {
    const newState = namespace ? { [namespace]: state } : state;
    console.log(state, newState, window.history);
    history.replace({
      pathname,
      state: newState,
    });
  }, [history, pathname, state, namespace]);

  useEffect(() => {
    replace();
  }, [replace]);

  return [state, setState];
};
