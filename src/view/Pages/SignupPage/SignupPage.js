import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import SignupForm from "./SignupForm";
import Footer from "../../Components/Footer/Footer";

const SignupPage = props => (
  <Container>
    <Header
      buttons={[
        { text: "Posts", link: "/posts" },
        { text: "About", link: "/about" }
      ]}
    />
    <SignupForm />
    <Footer />
  </Container>
);
export default SignupPage;