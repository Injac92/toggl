import React from "react";
import Navigation from "../Navigation/Navigation";

export default function Signup() {
  return (
    <>
      <Navigation />
      <div className="signup-page">
        <div className="signup-part1">
          <h1 className="signup-part1__h1">Let's get started</h1>
          <p className="signup-part1__p">
            Kickstart your productivity with Toggl
          </p>
        </div>
        <div className="signup-part2"></div>
      </div>
    </>
  );
}
