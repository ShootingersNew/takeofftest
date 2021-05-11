import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/contacts">
          <ContactsPage></ContactsPage>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
