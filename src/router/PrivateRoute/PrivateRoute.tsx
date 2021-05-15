import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth/AuthService";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(false);
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    AuthService.checkToken()
      .then(() => {
        setAuth(true);
        setIsTokenValidated(true);
      })
      .catch(() => {
        alert("Вы не авторизированы, пожалуйста, залогиньтесь");
        setAuth(false);
        setIsTokenValidated(true);
      });
  }, []);

  if (!isTokenValidated) return <div>loading...</div>; // or some kind of loading animation

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
export default PrivateRoute;
