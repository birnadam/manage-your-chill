import React, { Component } from "react";
import { compose } from "redux";

class UserSettings extends Component {
  render() {
    return <h5>User settings here</h5>;
  }
}

export default compose()(UserSettings);
