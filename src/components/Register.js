import React, { useState } from "react";
import { useUserGlobalContext } from "../userContext";


const Register = () => {
  const {registerUser} = useUserGlobalContext()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = e => {
      setName(e.target.value)
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
        name,
      email,
      password,
    };
    registerUser(newUser)
  };

  return (
    <div className="container form-container">
        <h2>Register A Shopping List Account</h2>
        <form onSubmit={handleSubmit} className="login-register-form">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange}
            value={name}
            className="form-input"
          />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={email}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={handlePass}
            value={password}
            className="form-input"
          />
          <button type="submit" className="btn login-btn">Register</button>
        </form>
      </div>
  );
};

export default Register