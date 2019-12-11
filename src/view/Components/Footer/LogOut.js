import React from "react";
import logout from "../../../services/logout";
import Column from "../../Components/Column/Column";

const LogOut = () => <Column ><p onClick={logout}>Log Out</p></Column>

export default LogOut;