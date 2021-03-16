import React, { FC, createContext, useReducer } from "react";
import { useLocalStorage } from "react-use";

type ThemeType = "light" | "dark";

interface DataType {
  theme: ThemeType;
}

interface MethodsType {
  changeTheme: (value: ThemeType) => void;
}

interface ContextProps {
  state: DataType;
  methods: MethodsType;
}

const ConfigContext = createContext({} as ContextProps);

const ConfigProvider: FC = props => {
  const { children } = props;
  const [themeDefault] = useLocalStorage<ThemeType>("theme", "light", { raw: true });

  const reducer = (state: DataType, action: Partial<DataType>) => {
    return {
      ...state,
      ...action,
    };
  };

  const data: DataType = {
    theme: themeDefault as ThemeType,
  };

  const [state, dispatch] = useReducer(reducer, data);

  const methods: MethodsType = {
    changeTheme: value => dispatch({ theme: value }),
  };

  const contextValue: ContextProps = {
    state,
    methods,
  };

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
};

export { ConfigContext, ConfigProvider };
