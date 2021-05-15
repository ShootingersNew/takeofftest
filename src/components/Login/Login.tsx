import react from "react";
import LoginView from "./../LoginView/LoginView";

const Login: React.FC = () => {
  const login = (): void => {
    console.log("logg");
  };
  return <LoginView login={login}></LoginView>;
};
export default Login;
