import React, { FC } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { ErrorLayout } from "@/layouts";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Animate = React.lazy(() => import("./Animate"));
const Status = React.lazy(() => import("./Status"));

const Content: FC = () => {
  const { path } = useRouteMatch();
  return (
    <ErrorLayout>
      <Switch>
        <Route path={`${path}/dashboard`} component={Dashboard} />
        <Route path={`${path}/animate`} component={Animate} />
        <Route path={`${path}/status`} component={Status} />
        <Redirect to={`${path}/status/404`} />
      </Switch>
    </ErrorLayout>
  );
};
export default Content;
