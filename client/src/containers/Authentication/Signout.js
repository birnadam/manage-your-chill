import React, { Component } from "react";
import { signout } from "../../actions";
import { connect } from "react-redux";
import history from "../../history";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
    history.push("/");
  }

  render() {
    return <h1>Sorry to see you go</h1>;
  }
}

export default connect(null, { signout })(Signout);
