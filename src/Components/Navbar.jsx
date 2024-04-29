import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Navbar.css"; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavbarTextClick = () => {
    alert("Navbar text clicked!");
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false); // Close the navigation menu after clicking a menu item
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/Pixonate logo.png"}
            height="70"
            alt="Pixonate Logo"
          />
          <div className="pixonate">
            <p className="small"></p>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)} // Toggle the navigation menu
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item" onClick={handleNavItemClick}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item" onClick={handleNavItemClick}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item" onClick={handleNavItemClick}>
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>

            <li className="nav-item" onClick={handleNavItemClick}>
              <Link className="nav-link" to="/pages">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="navbar-text contact-info"
          onClick={handleNavbarTextClick}
        >
          <span className="contact-number"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









