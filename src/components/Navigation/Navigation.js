import React from "react";
import logo from "../../images/Group 53@2x.jpg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation--info">
        <img className="navigation--info--img" src={logo} alt="logo" />
        <h2 className="navigation--info--h2">toggl clone</h2>
      </div>
      <div className="navigation--hamburger">
        <div className="navigation--hamburger--ham1"></div>
        <div className="navigation--hamburger--ham2"></div>
      </div>
      <div className="navigation--links">
        <Link to="">Feature</Link>
        <Link to="">Pricing</Link>
        <Link to="">Training</Link>
        <Link to="">Log in</Link>
        <Link to="">Sing up</Link>
      </div>
    </div>
  );
}

export default Navigation;
