import React from "react";
import Column from "../../Column/Column";
import { Link } from "react-router-dom";

const HeaderButton = ({ text, linkTo }) => (
  <Column>
    <Link to={linkTo}>{text}</Link>
  </Column>
);

export default HeaderButton;
