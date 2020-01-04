import React from "react";
import logo from "../../images/Group 53@2x.jpg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div className="brand">
        <Link to="#">
          <img className="brand--img" src={logo} alt="logo" />
        </Link>
        <h2 className="brand--h2">toggl clone</h2>
      </div>
      <div className="hamburger">
        <div className="hamburger--ham1"></div>
        <div className="hamburger--ham2"></div>
      </div>
      <div className="menu">
        <Link to="">Feature</Link>
        <Link to="">Pricing</Link>
        <Link to="">Training</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Navigation;
