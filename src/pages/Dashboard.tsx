import React from "react";

import { Outlet, NavLink } from "react-router-dom";
import "./dashboardStyling.scss";
export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>

        <div className="menu">
          <div className="menu-link">
            <NavLink to="/dashboard/users">Users Section</NavLink>
          </div>

          <div className="menu-link">
            <NavLink to="/dashboard/posts">Posts Section</NavLink>
          </div>
        </div>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
