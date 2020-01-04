import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div className="landing-page">
        <h1 className="landing-page--h1">Where did time go?</h1>
        <p className="landing-page--p">
          Turn your team on to productivity with Toggl the time tracker
        </p>
        <Link to="signup" className="landing-page--button">
          Sign up
        </Link>
      </div>
    </div>
  );
}
