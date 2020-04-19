import React from "react";
import { Form, Input, Button, Title, Label } from "./styles";

const NewPet = () => {
  return (
    <Form>
      <Title>New Pet</Title>
      <Input placeholder="name" type="text" name="name" />
      <Input placeholder="breed" type="text" name="breed" />
      <Input placeholder="age" type="number" name="age" />
      <Button type="submit">Create</Button>
    </Form>
  );
};

export default NewPet;
