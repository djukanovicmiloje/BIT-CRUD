import React from "react";
import Container from "../../SharedComponents/Container/Container";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PostsPageContent from "./PostsPageContent/PostsPageContent";


const PostsPage = props => <Container>
    <Header/>
    <PostsPageContent/>
    <Footer/>
</Container>

export default PostsPage;