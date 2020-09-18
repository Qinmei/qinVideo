import React, { FC, createContext, useReducer } from "react";
import { LanguageType } from "@/locales";

interface PropsType {}

interface DataType {
  language: LanguageType;
}

interface MethodsType {
  setLanguage: (language: LanguageType) => void;
}

interface ContextProps {
  state: DataType;
  methods: MethodsType;
}

const ConfigContext = createContext({} as ContextProps);

const ConfigProvider: FC<PropsType> = props => {
  const { children } = props;

  const reducer = (state: DataType, action: any) => {
    return {
      ...state,
      ...action,
    };
  };

  const data: DataType = {
    language: "zh_CN",
  };

  const [state, dispatch] = useReducer(reducer, data);

  const methods: MethodsType = {
    setLanguage: (language: LanguageType) => dispatch({ language }),
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
