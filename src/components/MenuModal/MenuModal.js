import React from "react";
import { Link } from "react-router-dom";

export default function MenuModal() {
  return (
    <div className="menu--modal">
      <div className="menu--modal-items">
        <Link to="">Feature</Link>
        <Link to="">Pricing</Link>
        <Link to="">Training</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
