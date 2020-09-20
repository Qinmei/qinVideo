import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import intl from "react-intl-universal";
import "@/assets/style/base.less";

const Auth = React.lazy(() => import("@/pages/Auth"));
const Home = React.lazy(() => import("@/pages/Home"));

type PropsType = {};

export const Pages: FC<PropsType> = props => {
  return (
    <>
      <h1>{intl.get("common.message1")}</h1>

      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path={"/home"} component={Home} />
        <Route render={() => <Redirect to="/auth/login" />} />
      </Switch>
    </>
  );
};
