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
import handleLoginError from "../../../services/handleLoginError";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: sessionStorage.getItem("loggedIn"),
      loginError: {
        email: "",
        password: ""
      }
    };
  }

  onInputChange(name, value) {
    this.setState({ [name]: value });
  }

  onInputClick() {
    this.setState({
      loginError: {
        email: "",
        password: ""
      }
    })
  }

  onSuccessfulLogin(response) {
    storeUserKey(response);
    this.setState({
      loggedIn: true
    });
  }

  onUnSuccessfulLogin(response) {
    const loginError = handleLoginError(response);
    this.setState({ loginError });
  }

  onSignInClick() {
    const loginInfo = {
      email: this.state.email,
      password: this.state.password
    };

    http.post(
      "http://crud-api.hypetech.xyz/v1/auth/login",
      loginInfo,
      response => this.onSuccessfulLogin(response),
      response => this.onUnSuccessfulLogin(response)
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
              onChange={(name, value) => this.onInputChange(name, value)}
              placeholder="Email Address"
              name="email"
              error={this.state.loginError.email}
              onClick={() => this.onInputClick()}
            />
          </Column>
          <Column basis={3}>
            <Input
              onChange={(name, value) => this.onInputChange(name, value)}
              onClick={() => this.onInputClick()}
              placeholder="Password"
              name="password"
              error={this.state.loginError.password}
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
};
export default LoginForm;
