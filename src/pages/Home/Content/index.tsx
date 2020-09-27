import React, { FC } from "react";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import { ErrorLayout } from "@/layouts";

interface PropsType {}
const Content: FC<PropsType> = props => {
  return (
    <Layout.Content>
      <ErrorLayout>
        <Switch>
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </ErrorLayout>
    </Layout.Content>
  );
};
export default Content;
