import React from "react";
import Navigation from "../Navigation/Navigation";

export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <div className="landing-page">
        <h1 className="landing-page--h1">Where did time go?</h1>
        <p className="landing-page--p">
          Turn your team on to productivity with Toggl the time tracker
        </p>
        <button className="landing-page--button">Sign up</button>
      </div>
    </div>
  );
}
