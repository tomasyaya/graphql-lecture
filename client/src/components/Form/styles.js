import styled from "styled-components";
import { colors } from "../../theme/colors";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 50px auto;
  height: 280px;
  border-radius: 10px;
  background-color: ${colors.lightGray};
  box-shadow: 6px 6px 12px -10px rgba(0, 0, 0, 0.68);
`;

export const Title = styled.h4`
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
  text-align: center;
  font-size: 1.5em;
  margin: 20px auto 10px auto;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.mainGreen};
  background: white;
  padding: 10px;
  border-radius: 5px;
  width: 60%;
  margin: 10px auto;
  ::placeholder {
    color: ${colors.lightGray};
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  background: ${colors.mainGreen};
  font-weight: bold;
  color: ${colors.white};
  margin: 0 auto;
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.3em;
`;
