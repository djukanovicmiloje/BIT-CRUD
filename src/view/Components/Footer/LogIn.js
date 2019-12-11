import React from "react";
import { Link } from "react-router-dom";
import Column from "../Column/Column";

const LogIn = () => (
  <Column>
    <Link to="/login">Log In</Link>
  </Column>
);

export default LogIn;
