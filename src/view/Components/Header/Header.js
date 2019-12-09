import React from "react";
import Row from "../../SharedComponents/Row/Row";
import Column from "../../SharedComponents/Column/Column";
import Title from "../../SharedComponents/Title/Title";
import HeaderButton from "./HeaderButton/HeaderButton";
import "./Header.css"


const Header = props => (
  <Row style="header">
    <Title text="Bit CRUD" />
    <Column>
      <HeaderButton text="About" />
      <HeaderButton text="Posts" />
    </Column>
  </Row>
);

export default Header;
