import React from "react";

import { Container, Image, Name, Text } from "./styles";

const PetCard = ({ name, age, breed, img }) => (
  <Container>
    <Image src={img} alt="dog" />
    <Name>{name}</Name>
    <Text>{breed}</Text>
    <Text>{`age: ${age} year`}</Text>
  </Container>
);

export default PetCard;
