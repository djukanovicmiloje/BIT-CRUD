import React from "react";
import Input from "../../Components/Input/Input";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";
import Icon from "../../Components/Icon/Icon";
import Title from "../../Components/Title/Title";
import { http } from "../../../services/HttpService";
import storeUserKey from "../../../services/StoreUserKey";
import { Redirect, Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: sessionStorage.getItem("loggedIn")
    };
  }
  onEmailChange(event) {
    this.email = event.target.value;
  }
  onPasswordChange(event) {
    this.password = event.target.value;
  }
  onSuccesfulLogin(response) {
    storeUserKey(response);
    this.setState({
      loggedIn: true
    });
  }
  onSignInClick() {
    const loginInfo = {
      email: this.email,
      password: this.password
    };
    console.log(loginInfo);

    http.post(
      "http://crud-api.hypetech.xyz/v1/auth/login",
      loginInfo,
      response => this.onSuccesfulLogin(response),
      console.log
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
            <Title text="Log in" />
          </Column>
          <Column basis={3}>
            <Input
              onChange={event => this.onEmailChange(event)}
              placeholder="Email Address"
            />
          </Column>
          <Column basis={3}>
            <Input
              onChange={event => this.onPasswordChange(event)}
              placeholder="Password"
            />
          </Column>
          <Column basis={3}>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </Column>
          <Column basis={3}>
            <Button
              onClick={() => this.onSignInClick()}
              text="Sign in"
              color="blue"
            />
          </Column>
        </Column>
      </Row>
    );
  }
}

export default LoginForm;
