import React from "react";
import Row from "../../SharedComponents/Row/Row";
import Column from "../../SharedComponents/Column/Column";
import Title from "../../SharedComponents/Title/Title";
import HeaderButton from "./HeaderButton/HeaderButton";
import "./Header.css";

const Header = props => (
  <Row style="header">
    <Column>
      <Title text="Bit CRUD" />
    </Column>
    <Column>
      <HeaderButton text="About" linkTo="/about"/>
      <HeaderButton text="Posts" linkTo="/posts"/>
    </Column>
  </Row>
);

export default Header;
