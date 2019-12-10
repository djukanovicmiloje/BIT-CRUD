import React from "react";
import Input from "../../SharedComponents/Input/Input";
import Container from "../../SharedComponents/Container/Container"
import Row from "../../SharedComponents/Row/Row"
import Column from "../../SharedComponents/Column/Column"
import Button from "../../SharedComponents/Button/Button";
import Icon from "../../SharedComponents/Icon/Icon";
import Title from "../../SharedComponents/Title/Title";

class LoginForm extends React.Component {
    constructor() {
        super();
        this.email = "";
        this.password = "";
    }
    onEmailChange(event) {
        this.email = event.target.value;
    }
    onPasswordChange(event) {
        this.password = event.target.value;
    }
    onSignInClick() {
        const loginInfo = {
            email: this.email,
            password: this.password
        }
        console.log(loginInfo);
    }
    render() {
        return <Row>
            <Column basis={1}>
                <Column basis={3}><div className="login_icon"><Icon icon="lock" /></div></Column>
                <Column basis={3}><Title text="Log in" /></Column>
                <Column basis={3}>
                    <Input onChange={event => this.onEmailChange(event)} placeholder="Email Address" />
                </Column>
                <Column basis={3}>
                    <Input onChange={event => this.onPasswordChange(event)} placeholder="Password" />
                </Column>
                <Column basis={3}>
                    <Button onClick={() => this.onSignInClick()} text="Sign in" color="blue" />
                </Column>
            </Column>
        </Row>


    }
}

export default LoginForm;