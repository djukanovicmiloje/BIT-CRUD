import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DashBoard from "./DashBoard";

const DashBoardPage = () => (
  <Container>
    <Header buttons={[{text: "Dashboard", link: "/dashboard"}, {text: "My Posts", link: "/myposts"} ]}/>
    <DashBoard />
    <Footer />
  </Container>
);

export default DashBoardPage;