import React from "react";
import logo from "../../images/Group 53@2x.jpg";
import { Link } from "react-router-dom";
import HamubrgerMenu from "../HamburgerMenu/HamubrgerMenu";

function Navigation() {
  return (
    <div className="navigation">
      <div className="brand">
        <Link to="#">
          <img className="brand__img" src={logo} alt="logo" />
        </Link>
        <h2 className="brand__h2">toggl clone</h2>
      </div>
      <HamubrgerMenu />
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
