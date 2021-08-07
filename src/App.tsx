import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";
import "./styles/global.css";

export default function App() {
  return (
    <Router history={history}>
      <header>
        Teste
      </header>
      <Routes />
      <footer>
        Teste de footer
      </footer>
    </Router>
  );
}
