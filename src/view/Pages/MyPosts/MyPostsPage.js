import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MyPosts from "./MyPosts";

const MyPostsPage = () => (
  <Container>
    <Header buttons={[{text: "Dashboard", link: "/dashboard"}, {text: "My Posts", link: "/myposts"} ]}/>
    <MyPosts />
    <Footer />
  </Container>
);

export default MyPostsPage;
