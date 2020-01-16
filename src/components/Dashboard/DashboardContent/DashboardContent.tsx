import React from "react";

export default function DashboardComponent() {
  return (
    <>
      <div className="dashboard-content__days">
        <h4 className="dashboard-content__days__h4">Today</h4>
        <p className="dashboard-content__days__p">0:01:32</p>
      </div>
      <div className="dashboard-content__projects">
        <h4 className="dashboard-content__projects__h4">project1</h4>
        <p className="dashboard-content__projects__p">0:01:00</p>
      </div>
      <div className="dashboard-content__projects">
        <h4 className="dashboard-content__projects__h4">project2</h4>
        <p className="dashboard-content__projects__p">0:00:32</p>
      </div>
    </>
  );
}
