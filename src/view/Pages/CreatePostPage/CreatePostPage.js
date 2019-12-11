import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CreatePost from "./CreatePost";

const CreatePostPage = () => (
  <Container>
    <Header buttons={[{text: "Dashboard", link: "/dashboard"}, {text: "My Posts", link: "/myposts"} ]}/>
    <CreatePost />
    <Footer />
  </Container>
);

export default CreatePostPage;