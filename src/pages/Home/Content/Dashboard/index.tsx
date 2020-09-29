import React, { FC } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const Overview = React.lazy(() => import("./Overview"));

interface PropsType {}
const Dashboard: FC<PropsType> = props => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/overview`} component={Overview} />
      <Redirect to={`${path}/overview`} />
    </Switch>
  );
};

export default Dashboard;
