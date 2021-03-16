import React, { FC } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { ErrorLayout } from "@/layouts";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Animate = React.lazy(() => import("./Animate"));
const Eposide = React.lazy(() => import("./Eposide"));
const Status = React.lazy(() => import("./Status"));
const Error = React.lazy(() => import("./Status/404"));

const Test = React.lazy(() => import("./Category"));

const Content: FC = () => {
  const { path } = useRouteMatch();
  return (
    <ErrorLayout>
      <Switch>
        <Route path={`${path}/dashboard`} component={Dashboard} />
        <Route path={`${path}/animate`} component={Animate} />
        <Route path={`${path}/eposide`} component={Eposide} />
        <Route path={`${path}/comment`} component={Error} />
        <Route path={`${path}/status`} component={Status} />
        <Route path={`${path}/test`} component={Test} />
        <Redirect to={`${path}/status/404`} />
      </Switch>
    </ErrorLayout>
  );
};
export default Content;
