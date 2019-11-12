import React from "react";
import DrawerToggleButton from "../Partials/SideDrawer/DrawerToggleButton";

import "../Partials/Toolbar.css";

const Toolbar = props => (
  <nav className="navbar navbar-expand-lg toolbar" id="navbar">
    <div className="nav toolbar_navigation">
      <DrawerToggleButton click={props.drawerClickHandler} />
      {/* dashboard, settings, sign in & sign up (or username & log out) */}
      <ul className="navbar-menu horizontal-list">
        <li className="mr-2">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="mr-2">
          <a href="#">Settings</a>
        </li>

        <li className="mr-2">
          <a href="#">Sign in</a>
        </li>
        <li className="mr-2">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Toolbar;
