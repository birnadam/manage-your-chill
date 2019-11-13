import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import DrawerToggleButton from "../Partials/SideDrawer/DrawerToggleButton";

import "../Partials/Toolbar.css";

class Toolbar extends Component {
  state = {
    userCheck: false
  };

  componentDidMount() {
    console.log(this.state);
    let userCheck = this.props.state.auth.authenticated;
    if (userCheck !== "" && userCheck !== null) {
      this.setState({
        userCheck: true
      });
    } else {
      this.setState({
        userCheck: false
      });
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg toolbar" id="navbar">
        <div className="nav toolbar_navigation">
          <DrawerToggleButton click={this.props.drawerClickHandler} />
          {/* dashboard, settings, sign out (or logo if user is not logged in) */}
          {this.state.userCheck ? (
            <ul className="navbar-menu horizontal-list">
              <li className="mr-2">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="mr-2">
                <a href="#">Settings</a>
              </li>
              <li className="mr-2">
                <a href="/signout">Sign Out</a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-menu horizontal-list">
              <li className="mr-2">
                <img
                  src={
                    "https://perma.cool/wp-content/uploads/2019/03/site-icon-1.png"
                  }
                  alt={"Perma.Cool logo"}
                  width={"60"}
                />
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(connect(mapStateToProps, {}))(Toolbar);
