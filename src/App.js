import AppNavbar from "./components/AppNavbar";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Modal from "./components/Modal";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/Hompage";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from 'axios'

axios.defaults.withCredentials = true

function App() {
  return (
    <>
      
        <Modal />
        <AppNavbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shopping">
            <ShoppingList />
          </Route>
          <Route path="*">

          </Route>
        </Switch>
      
    </>
  );
}

export default App;
