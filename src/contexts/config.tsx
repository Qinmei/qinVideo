import React, { FC, createContext, useReducer } from "react";

interface PropsType {}

interface DataType {}

interface MethodsType {}

interface ContextProps {
  state: DataType;
  methods: MethodsType;
}

const ConfigContext = createContext({} as ContextProps);

const ConfigProvider: FC<PropsType> = props => {
  const { children } = props;

  const reducer = (state: DataType, action: Partial<DataType>) => {
    return {
      ...state,
      ...action,
    };
  };

  const data: DataType = {};

  const [state, dispatch] = useReducer(reducer, data);

  const methods: MethodsType = {};

  const contextValue: ContextProps = {
    state,
    methods,
  };

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
};

export { ConfigContext, ConfigProvider };
