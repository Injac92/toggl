import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <div className="landing-page">
        <h1 className="landing-page__h1">Where did time go?</h1>
        <p className="landing-page__p">
          Turn your team on to productivity with Toggl the time tracker
        </p>
        <Link to="signup" className="landing-page__button">
          Sign up
        </Link>
      </div>
    </div>
  );
}
