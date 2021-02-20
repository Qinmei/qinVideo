import { Form, Input, Button } from "antd";
import { T } from "ramda";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Modules } from "./module";

const useModuleState = <T,>(initialState: T) => {
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

export default function IndexPage() {
  const [state, dispatch] = useModuleState<{ loading: boolean; select: string[] }>({
    loading: false,
    select: [],
  });

  const { current: module } = useRef(new Modules(state, dispatch));

  const update = () => {
    module.update();
  };

  const init = () => {
    module.init();
  };

  console.log(state.loading, state.select, module);

  return (
    <>
      <Button type="primary" onClick={init} loading={state.loading}>
        Init
      </Button>
      <Button type="primary" onClick={update}>
        Update{state.select.join(",")}
      </Button>
    </>
  );
}
