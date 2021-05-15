import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AuthService from "../services/auth/AuthService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const Routes: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    AuthService.getCurrentUser() && setIsLogged(true);
  }, [setIsLogged, isLogged]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LoginPage></LoginPage>
        </Route>
        <PrivateRoute
          component={() => <ContactsPage></ContactsPage>}
        ></PrivateRoute>
      </Switch>
    </>
  );
};
export default Routes;
