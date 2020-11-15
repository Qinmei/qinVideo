import React, { FC, createContext, useReducer } from "react";

interface DataType {
  theme: "light" | "dark";
}

interface MethodsType {}

interface ContextProps {
  state: DataType;
  methods: MethodsType;
}

const ConfigContext = createContext({} as ContextProps);

const ConfigProvider: FC = props => {
  const { children } = props;

  const reducer = (state: DataType, action: Partial<DataType>) => {
    return {
      ...state,
      ...action,
    };
  };

  const data: DataType = {
    theme: "dark",
  };

  const [state, dispatch] = useReducer(reducer, data);

  const methods: MethodsType = {
    changeTheme: (value: "dark" | "light") => dispatch({ theme: value }),
  };

  const contextValue: ContextProps = {
    state,
    methods,
  };

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
};

export { ConfigContext, ConfigProvider };
