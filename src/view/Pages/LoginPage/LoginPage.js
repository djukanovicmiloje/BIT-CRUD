import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import LoginForm from "./LoginForm";
import Footer from "../../Components/Footer/Footer";

const LoginPage = (props) => <Container>
    <Header buttons={[{text: "Posts", link: "/posts"}, {text: "About", link: "/about"} ]}/>
    <LoginForm />
    <Footer />
</Container>

export default LoginPage;