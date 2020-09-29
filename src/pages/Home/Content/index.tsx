import React, { FC } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { ErrorLayout } from "@/layouts";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Status = React.lazy(() => import("./Status"));

interface PropsType {}
const Content: FC<PropsType> = props => {
  const { path } = useRouteMatch();
  return (
    <ErrorLayout>
      <Switch>
        <Route path={`${path}/dashboard`} component={Dashboard} />
        <Route path={`${path}/status`} component={Status} />
        <Redirect to={`${path}/status/404`} />
      </Switch>
    </ErrorLayout>
  );
};
export default Content;
