import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ItemProvider from "./context";
import { UserProvider } from "./userContext";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ItemProvider>
          <App />
        </ItemProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
