import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const Routes: React.FC = () => {
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
