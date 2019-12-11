import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PostsPageContent from "./PostsPageContent/PostsPageContent";

const PostsPage = () => (
  <Container>
    <Header
      buttons={[
        { text: "Posts", link: "/posts" },
        { text: "About", link: "/about" }
      ]}
    />
    <PostsPageContent />
    <Footer />
  </Container>
);

export default PostsPage;
