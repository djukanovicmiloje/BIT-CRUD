import React from "react";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Subtitle from "../../Components/Subtitle/Subtitle";
import "./Footer.css";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

const Footer = props => (
  <Row style="footer">
    <Column>
      <Subtitle text="Bit student 2019" />
    </Column>
    <Column>
      {sessionStorage.getItem("loggedIn") ? <LogOut /> : <LogIn />}
    </Column>
  </Row>
);

export default Footer;
