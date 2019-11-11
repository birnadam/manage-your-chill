import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../../actions";

class Signin extends Component {
  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.success();
    });
  };

  renderInput = ({ input }) => {
    return <input {...input} />;
  };

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <label for="email" id="labelColor">
            Email
          </label>
          <fieldset>
            <Field
              name="email"
              type="text"
              id="email"
              className="email form-control"
              component={this.renderInput}
              autoComplete="none"
            />
          </fieldset>
        </div>
        <div className="form-group">
          <label for="password" id="labelColor">
            Password
          </label>
          <fieldset>
            <Field
              name="password"
              type="password"
              id="password"
              className="form-control"
              component={this.renderInput}
              autoComplete="none"
            />
          </fieldset>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block btn-radius btn-primary submit"
          >
            SIGN IN
          </button>
        </div>
        <div>{this.props.errorMessage}</div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    { signin }
  ),
  reduxForm({ form: "signin" })
)(Signin);
