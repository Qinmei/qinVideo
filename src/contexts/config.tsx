import React, { FC, createContext, useReducer } from "react";
import { Language } from "@/locales";

interface PropsType {}

interface DataType {
  language: Language;
}

interface MethodsType {
  setLanguage: (language: Language) => void;
}

interface ContextProps {
  state: DataType;
  methods: MethodsType;
}

const ConfigContext = createContext({} as ContextProps);

const ConfigProvider: FC<PropsType> = (props) => {
  const { children } = props;

  const reducer = (state: DataType, action: any) => {
    return {
      ...state,
      ...action,
    };
  };

  const data: DataType = {
    language: "zh-CN",
  };

  const [state, dispatch] = useReducer(reducer, data);

  const methods: MethodsType = {
    setLanguage: (language: Language) => dispatch({ language }),
  };

  const contextValue: ContextProps = {
    state,
    methods,
  };

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
