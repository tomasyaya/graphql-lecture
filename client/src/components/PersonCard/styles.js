import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`
  min-height: 150px;
  min-width: 180px;
  box-shadow: 6px 6px 12px -10px rgba(0, 0, 0, 0.68);
  margin: 20px;
  border-radius: 10px;
  background: ${colors.lightGray};
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h4`
  text-transform: uppercase;
  color: ${colors.mainGreen};
  font-weight: bold;
  margin: 0;
  padding: 5px 20px;
`;

export const Text = styled.p`
  font-weight: bold;
  opacity: 0.7;
  margin: 0;
  padding: 5px 20px;
`;
