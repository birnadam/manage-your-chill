import React, { Component } from "react";
//component import
import Auth from "../../containers/Authentication";
// import Signin from "../../containers/Authentication/Signin";
// import Signup from "../../containers/Authentication/Signup";

//import css
import "./index.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true
    };

    this.switchToSignup = this.switchToSignup.bind(this);
    this.postLogin = this.postLogin.bind(this);
  }

  switchToSignup() {
    if (this.state.signIn) {
      this.setState({ signIn: false });
    } else {
      this.setState({ signIn: true });
    }
  }

  postLogin() {
    this.props.history.push("/counter");
  }

  render() {
    return (
      <div className="page">
        <Auth />
      </div>
    );
  }
}

export default Welcome;
