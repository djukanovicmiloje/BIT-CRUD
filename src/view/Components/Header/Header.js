import React from "react";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Title from "../Title/Title";
import HeaderButton from "./HeaderButton/HeaderButton";
import "./Header.css";

const Header = ({ buttons }) => (
  <Row style="header">
    <Column>
      <Title text="CRUD" />
    </Column>
    <Column>
      {buttons.map(button => (
        <HeaderButton text={button.text} linkTo={button.link} />
      ))}
    </Column>
  </Row>
);

export default Header;
