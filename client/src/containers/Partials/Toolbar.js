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
          <img
            src={
              "https://perma.cool/wp-content/uploads/2019/03/site-icon-1.png"
            }
            alt={"Perma.Cool logo"}
            width={"55"}
          />
        </li>
      </ul>
    </div>
  </nav>
);

export default Toolbar;
