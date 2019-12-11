import React from "react";
import Input from "../../Components/Input/Input";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";
import Icon from "../../Components/Icon/Icon";
import Title from "../../Components/Title/Title";
import { http } from "../../../services/HttpService";
import storeUserKey from "../../../services/StoreUserKey";
import { Redirect } from "react-router-dom";
import handleLoginError from "../../../services/handleLoginError";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: sessionStorage.getItem("loggedIn"),
      loginError: {
        email: "",
        password: "",
        name: "",
        lastName: ""
      }
    };
  }
  onInputChange(name, value) {
    this.setState({ [name]: value });
  }

  onSuccessfulSignUp(response) {
    storeUserKey(response);
    this.setState({ loggedIn: true });
  }
  onUnSuccessfulSignUp(response) {
    const loginError = handleLoginError(response);
    this.setState({ ...loginError });
  }
  onSignUpClick() {
    const signUpInfo = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      password: this.state.password
    };
    if (this.state.firstName.length < 3) {
      this.state.loginError.firstName = "Invalid name"
      this.setState(this.state.loginError);
    }
    if (this.state.lastName.length < 3) {
      this.state.loginError.lastName = "Invalid last name"
      this.setState(this.state.loginError);
    }
    http.post(
      "http://crud-api.hypetech.xyz/v1/auth/register",
      signUpInfo,
      r => this.onSuccessfulSignUp(r),
      r => this.onUnSuccessfulSignUp(r)
    );
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Row style="form">
        <Column basis={1}>
          <Column basis={3}>
            <div className="login_icon">
              <Icon icon="lock" />
            </div>
          </Column>
          <Column basis={3}>
            <Title text="Sign up" />
          </Column>
          <Column basis={2}>
            <Input
              onChange={(name, value) => this.onInputChange(name, value)}
              placeholder="First Name"
              name="firstName"
              error={this.state.loginError.firstName}
            />
          </Column>
          <Column basis={2}>
            <Input
              onChange={(name, value) => this.onInputChange(name, value)}
              placeholder="Last Name"
              name="lastName"
              error={this.state.loginError.lastName}
            />
          </Column>
          <Column basis={3}>
            <Input
              onChange={(name, value) => this.onInputChange(name, value)}
              placeholder="Email Address"
              name="email"
              error={this.state.loginError.email}
            />
          </Column>
          <Column basis={3}>
            <Input
              onChange={(name, value) => this.onInputChange(name, value)}
              placeholder="Password"
              name="password"
              error={this.state.loginError.password}
            />
          </Column>
          <Column basis={3}>
            <Button
              onClick={() => this.onSignUpClick()}
              text="Sign up"
              color="blue"
            />
          </Column>
        </Column>
      </Row>
    );
  }
}

export default SignupForm;
