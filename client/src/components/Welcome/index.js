import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

//component import
import Auth from "../../containers/Authentication";
import Dashboard from "../Dashboard";

//import css
import "./index.css";

class Welcome extends Component {
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
      <div className="page">
        {this.state.userCheck ? <Dashboard /> : <Auth />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(connect(mapStateToProps, {}))(Welcome);
