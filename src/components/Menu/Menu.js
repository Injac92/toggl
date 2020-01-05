import React from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
  //   const { isOpen } = props;
  //   console.log(isOpen);
  //   const menuClass = isOpen ? "menu--modal" : "menu";
  return (
    <div className="menu">
      <Link to="">Feature</Link>
      <Link to="">Pricing</Link>
      <Link to="">Training</Link>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}
