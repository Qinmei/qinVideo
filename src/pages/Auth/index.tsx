import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthLayout } from "@/layouts";
import Login from "./Login";
import Register from "./Register";
import Forget from "./Forget";

interface propTypes {}

const Auth: React.FC<propTypes> = (props) => {
  return (
    <AuthLayout>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/forget" component={Forget} />
      </Switch>
    </AuthLayout>
  );
};

export default Auth;
