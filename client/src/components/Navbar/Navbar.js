import React from "react";
import { Routes } from "../../constants";
import { Navbar, Link } from "./styles";

const Nav = () => (
  <Navbar>
    <Link to={Routes.HOME}>Pets</Link>
    <Link to={Routes.NEW}>New Pet</Link>
    <Link to={Routes.PERSONS}>Persons</Link>
    <Link to={Routes.NEW_PERSON}>New Person</Link>
  </Navbar>
);

export default Nav;
