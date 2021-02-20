import { useReducer } from "react";

export const useReducerState = <T>(initialState: T) => {
  const reducer = (state: T, action: Partial<T>) => {
    return {
      ...state,
      ...action,
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchCall = <K extends keyof T>(propKey: K, value: T[K]) =>
    dispatch(({
      [propKey]: value,
    } as unknown) as { [K in keyof T]: T[K] });
  return [state, dispatchCall] as [T, <K extends keyof T>(propKey: K, value: T[K]) => void];
};
