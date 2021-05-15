import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LoginFormModel from "../../Models/LoginFormModel";
interface LoginViewModel {
  login: (form: LoginFormModel) => void;
}

const LoginView: React.FC<LoginViewModel> = ({ login }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submitForm = () => {
    login(form);
  };
  const changeForm = ({ target }, key: string) => {
    let val = (target as HTMLInputElement).value;
    setForm({ ...form, [key]: val });
  };

  return (
    <>
      <form action="POST">
        <div>
          <TextField
            id="standard-basic"
            label="login"
            name="login"
            value={form.email}
            onChange={(event) => changeForm(event, "email")}
          />
        </div>
        <TextField
          id="standard-password-input"
          label="password"
          type="password"
          value={form.password}
          onChange={(event) => changeForm(event, "password")}
        />
        <div>
          <Button variant="contained" onClick={submitForm}>
            Войти
          </Button>
        </div>
      </form>
    </>
  );
};
export default LoginView;
