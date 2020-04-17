import React from "react";
import { Navbar, Link } from "./styles";

const Nav = () => (
  <Navbar>
    <Link to="/">Pets</Link>
    <Link to="/new">New</Link>
  </Navbar>
);

export default Nav;
