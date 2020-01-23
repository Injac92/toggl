import React from "react";
import { Link } from "react-router-dom";
import DashboardContent from "./DashboardContent/DashboardContent";
import logo from "../../images/Group 53@2x.jpg";
import clock from "../../images/Group 55.jpg";
import timerPlay from "../../images/Group 54.jpg";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-menu">
        <Link className="dashboard-menu__logo" to="/">
          <img className="dashboard-menu__logo__brand" src={logo} alt="logo" />
          <p className="dashboard-menu__logo__name">toggl clone</p>
        </Link>
        <div className="dashboard-menu__timer">
          <img
            className="dashboard-menu__timer__clock"
            src={clock}
            alt="clock"
          />
          <p className="dashboard-menu__timer__text">Timer</p>
        </div>
      </div>
      <div className="dashboard-wrapper">
        <div className="dashboard-title">
          <h3 className="dashboard-title__h3">What are u working on?</h3>
          <div className="dashboard-title__timer">
            <p>0:00:00</p>
            <img src={timerPlay} alt="play" />
          </div>
        </div>
        <div className="dashboard-subtitle">
          <h3 className="dashboard-subtitle__h3">Visualization disabled</h3>
        </div>
        <DashboardContent />
        <DashboardContent />
      </div>
    </div>
  );
}
