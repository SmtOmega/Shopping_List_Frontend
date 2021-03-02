import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ItemProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
