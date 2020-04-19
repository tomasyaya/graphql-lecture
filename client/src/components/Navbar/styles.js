import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../theme/colors";

export const Navbar = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${colors.mainGray};
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
