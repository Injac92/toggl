import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Login() {
  return (
    <div>
      <Navigation />
      <div className="login-page">
        <div className="login-part1">
          <h1 className="login-part1__h1">Get tracking</h1>
          <p className="login-part1__p">Log in to your Toggl account.</p>
        </div>
        <div className="login-part2">
          <div className="signup-container">
            <p className="signup-container__p">Don't have an account?</p>
            <Link to="signup" className="signup-container__button">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
