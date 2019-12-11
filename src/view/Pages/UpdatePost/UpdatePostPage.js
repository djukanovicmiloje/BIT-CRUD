import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import UpdatePost from "./UpdatePost";

const UpdatePostPage = props => (
  <Container>
    <Header buttons={[{text: "Dashboard", link: "/dashboard"}, {text: "My Posts", link: "/myposts"} ]}/>
    <UpdatePost postId={props.match.params.id} />
    <Footer />
  </Container>
);

export default UpdatePostPage;
