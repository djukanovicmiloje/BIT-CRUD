import React from "react";
import Input from "../../Components/Input/Input";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";
import Icon from "../../Components/Icon/Icon";
import Title from "../../Components/Title/Title";
import { http } from "../../../services/HttpService";
import storeUserKey from "../../../services/StoreUserKey";
import {Redirect} from "react-router-dom";

class SignupForm extends React.Component {
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
  onFirstNameChange(event) {
    this.firstName = event.target.value;
  }
  onLastNameChange(event) {
    this.lastName = event.target.value;
  }
  onSuccessfullSignUp(response) {
    storeUserKey(response);
    this.setState({ loggedIn: true });
  }
  onSignUpClick() {
    const signUpInfo = {
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      password: this.password
    };
    http.post(
      "http://crud-api.hypetech.xyz/v1/auth/register",
      signUpInfo,
      r => this.onSuccessfullSignUp(r),
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
            <Title text="Sign up" />
          </Column>
          <Column basis={2}>
            <Input
              onChange={event => this.onFirstNameChange(event)}
              placeholder="First Name"
            />
          </Column>
          <Column basis={2}>
            <Input
              onChange={event => this.onLastNameChange(event)}
              placeholder="Last Name"
            />
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
