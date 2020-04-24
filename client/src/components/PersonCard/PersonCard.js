import React from "react";
import { Container, Name, Text } from "./styles";

const PersonCard = ({ name, surname, address }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Text>{surname}</Text>
      <Text>{address}</Text>
    </Container>
  );
};

export default PersonCard;
