import styled from "styled-components";
import { colors } from "../../theme/colors";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100%;
  padding-bottom: 30px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${colors.mainGreen};
  color: white;
  border: none;
  margin: 10px 0 0 45%;
  border-radius: 5px;

  font-weight: bold;
  font-size: 1.3em;
`;
