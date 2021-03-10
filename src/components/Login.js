import React, { useState } from "react";
import { useUserGlobalContext } from "../userContext";
import { Link} from "react-router-dom";

const Login = () => {
  const { userLogin} = useUserGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };
    userLogin(loginDetails);
  };
  return (
    <div className="container form-container">
      <h2>Login To Your Account</h2>
      <form onSubmit={handleSubmit} className="login-register-form">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={email}
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={handlePass}
          value={password}
          className="form-input"
          required
        />
        <button type="submit" className="btn login-btn">
          Login
        </button>
        <p>
          Don't have account, click to <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
