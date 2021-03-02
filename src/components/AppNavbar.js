import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'

const AppNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <nav>
      <div className="nav-container">
          <div className="nav-header">
              <h3 className="logo">Shopping List</h3>
              <button className="icon-toggle" onClick={toggleMenu}>
                  <FaBars />
              </button>
          </div>
          <ul className={`${showMenu ? "link-container show-menu": "link-container"}`}>
              <li>Github</li>
          </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
