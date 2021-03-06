import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AuthService from "./services/auth/AuthService";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";

function App({ children }) {
  let history = useHistory();
  const logout = () => {
    AuthService.logout();
    history.push("/");
  };
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Страница логина</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
          <button onClick={logout}>Разлогиниться</button>
        </nav>
      </header>
      <Container maxWidth="sm">{children}</Container>
    </div>
  );
}

export default App;
