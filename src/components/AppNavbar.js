import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link} from "react-router-dom";
import { useUserGlobalContext } from "../userContext";

const AppNavbar = () => {
  const { logOutUser, loggedIn } = useUserGlobalContext();
  const [showMenu, setShowMenu] = useState(false);
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/" className="home-link"><h3 className="logo">Shopping List</h3></Link>
          <button className="icon-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <ul
          className={`${
            showMenu ? "link-container show-menu" : "link-container"
          }`}
        >
          <li>Github</li>
          {loggedIn ? (
            <li>
              <button onClick={logOutUser}>Log Out</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="login-register-btn">Login</Link>
              </li>
              <li><Link to="/register" className="login-register-btn">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
