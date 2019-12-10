import React from "react";
import Input from "../../SharedComponents/Input/Input";
import Container from "../../SharedComponents/Container/Container"
import Row from "../../SharedComponents/Row/Row"
import Column from "../../SharedComponents/Column/Column"
import Button from "../../SharedComponents/Button/Button";
import Icon from "../../SharedComponents/Icon/Icon";
import Title from "../../SharedComponents/Title/Title";

class SignupForm extends React.Component {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
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
    onSignUpClick() {
        const signUpInfo = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        }
        console.log(signUpInfo);
    }
    render() {
        return <Row>
            <Column basis={1}>
                <Column basis={3}><div className="login_icon"><Icon icon="lock" /></div></Column>
                <Column basis={3}><Title text="Sign up" /></Column>
                <Column basis={2}>
                    <Input onChange={event => this.onFirstNameChange(event)} placeholder="First Name" />
                </Column>
                <Column basis={2}>
                    <Input onChange={event => this.onLastNameChange(event)} placeholder="Last Name" />
                </Column>
                <Column basis={3}>
                    <Input onChange={event => this.onEmailChange(event)} placeholder="Email Address" />
                </Column>
                <Column basis={3}>
                    <Input onChange={event => this.onPasswordChange(event)} placeholder="Password" />
                </Column>
                <Column basis={3}>
                    <Button onClick={() => this.onSignUpClick()} text="Sign up" color="blue" />
                </Column>
            </Column>
        </Row>


    }
}

export default SignupForm;