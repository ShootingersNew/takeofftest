import react, { useState, useEffect } from "react";
import LoginView from "./../LoginView/LoginView";
import AuthService from "../../services/auth/AuthService";
import LoginFormModel from "../../Models/LoginFormModel";
import { Redirect } from "react-router-dom";

const Login: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const login: (form: LoginFormModel) => void = (form) => {
    AuthService.login(form)
      .then(() => setIsLogged(true))
      .catch(() => alert("Такой пользователь не найден"));
  };
  if (isLogged) return <Redirect to="/contacts" />;
  return <LoginView login={login}></LoginView>;
};
export default Login;
