import React, { FC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "@/themes/global.less";

const Auth = React.lazy(() => import("@/pages/Auth"));
const Home = React.lazy(() => import("@/pages/Home"));
const Test = React.lazy(() => import("@/pages/Test"));

export const Pages: FC = props => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path={"/home"} component={Home} />
      <Route path={"/test"} component={Test} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
