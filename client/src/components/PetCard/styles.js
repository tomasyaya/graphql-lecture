import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  min-width: 250px;
  box-shadow: 6px 6px 12px -10px rgba(0, 0, 0, 0.68);
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const Image = styled.img`
  width: 300px;
  height: 220px;
  border-radius: 10px 10px 0 0px;
`;

export const Name = styled.h4`
  text-transform: uppercase;
  color: rgb(0, 216, 144);
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
