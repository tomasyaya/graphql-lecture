import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #4b505c;
`;

export const Link = styled(RouterLink)`
  color: #ffff;
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
  font-size: 1.5em;
  :hover {
    color: lightgray;
    font-weight: normal;
  }
`;
