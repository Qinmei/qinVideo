import React, { FC } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("./List"));
const Add = React.lazy(() => import("./Add"));
const Edit = React.lazy(() => import("./Edit"));
const Category = React.lazy(() => import("./Category"));

const Animate: FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/list`} component={List} />
      <Route exact path={`${path}/add`} component={Add} />
      <Route exact path={`${path}/edit/:id`} component={Edit} />
      <Route exact path={`${path}/cate`} component={Category} />
      <Redirect to={`${path}/list`} />
    </Switch>
  );
};

export default Animate;
