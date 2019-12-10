import React from "react";
import Container from "../../SharedComponents/Container/Container";
import Header from "../../Components/Header/Header";
import LoginForm from "./LoginForm";
import Footer from "../../Components/Footer/Footer";

const LoginPage = (props) => <Container>
    <Header />
    <LoginForm />
    <Footer />
</Container>

export default LoginPage;