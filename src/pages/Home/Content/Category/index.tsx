import React, { FC } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("./List"));

export const Eposide: FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/list`} component={List} />
      <Redirect to={`${path}/list`} />
    </Switch>
  );
};

export default Eposide;
