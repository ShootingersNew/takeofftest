import react, { useEffect } from "react";
interface LoginViewModel {
  login: () => void;
}
const LoginView: React.FC<LoginViewModel> = ({ login }) => {
  return <div>heh</div>;
};
export default LoginView;
