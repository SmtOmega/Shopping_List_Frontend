import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import reducer, {
  CHECK_LOGIN,
  LOADING,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
} from "./reducer/userReducer";

const userContext = React.createContext();

const url = "https://mike-shopping-list.herokuapp.com/user/loggedIn";
const getLocastorage = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return {};
  }
};

const initialState = {
  user: getLocastorage(),
  loggedIn: undefined,
  loading: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  const getLoggedIn = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios(url);
      dispatch({ type: CHECK_LOGIN, payload: response.data });
    } catch (error) {}
  };

  const userLogin = async (details) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.post(
        "https://mike-shopping-list.herokuapp.com/user/login",
        details
      );

      dispatch({ type: LOGIN_USER, payload: response.data.user });
      await getLoggedIn();
      history.push("/");
    } catch (error) {}
  };

  const registerUser = async (user) => {
    dispatch({ type: LOADING });
    const response = await axios.post(
      "https://mike-shopping-list.herokuapp.com/user",
      user
    );
    dispatch({ type: SIGNUP_USER, payload: response.data.user });
    await getLoggedIn();
    history.push("/");
  };
  const logOutUser = async () => {
    dispatch({ type: LOADING });
    await axios("https://mike-shopping-list.herokuapp.com/user/logout");
    dispatch({ type: LOGOUT_USER });
    getLoggedIn();
    history.push("/");
  };
  useEffect(() => {
    getLoggedIn();
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <userContext.Provider
      value={{ ...state, userLogin, registerUser, logOutUser, getLoggedIn }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserGlobalContext = () => {
  return useContext(userContext);
};
