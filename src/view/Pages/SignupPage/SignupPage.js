import React from "react";
import Container from "../../SharedComponents/Container/Container";
import Header from "../../Components/Header/Header";
import SignupForm from "./SignupForm";
import Footer from "../../Components/Footer/Footer";

const SignupPage = (props) => <Container>
    <Header />
    <SignupForm />
    <Footer />
</Container>

export default SignupPage;