import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App({ children }) {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Логин</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default App;
