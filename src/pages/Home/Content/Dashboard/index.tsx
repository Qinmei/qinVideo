import React, { FC } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const Analysis = React.lazy(() => import("./Analysis"));
const Workplace = React.lazy(() => import("./Workplace"));

const Dashboard: FC = props => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/analysis`} component={Analysis} />
      <Route exact path={`${path}/workplace`} component={Workplace} />
      <Redirect to={`${path}/analysis`} />
    </Switch>
  );
};

export default Dashboard;
