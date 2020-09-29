import React, { FC } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const Result404 = React.lazy(() => import("./404"));

interface PropsType {}
const Dashboard: FC<PropsType> = props => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/404`} component={Result404} />
      <Redirect to={`${path}/404`} />
    </Switch>
  );
};

export default Dashboard;
