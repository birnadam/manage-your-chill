import React from "react";
import "./SideDrawer.css";
import NavLinks from "../../NavLinks";
// import Userinfo from '../../Userinfo/Userinfo';

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  // console.log(props.userData);
  return (
    <nav className={drawerClasses}>
      <ul>
        {/*<Userinfo userData={props.userData} />*/}
        <li> USER NAME</li>
        <li>
          <a href="/">CHILLA</a>
        </li>
        <li>
          <a href="/">CHILLA</a>
        </li>
        <li>
          <a href="/">CHILLA</a>
        </li>
        <li>
          <NavLinks />
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
