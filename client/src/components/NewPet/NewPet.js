import React from "react";
import { Form, Input, Button, Title, Label } from "./styles";

const NewPet = ({ handleChange, handleSubmit, state }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Title>New Pet</Title>
      <Input
        required
        placeholder="name"
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <Input
        required
        placeholder="breed"
        type="text"
        name="breed"
        value={state.breed}
        onChange={handleChange}
      />
      <Input
        required
        placeholder="age"
        type="number"
        name="age"
        value={state.age}
        onChange={handleChange}
      />
      <Button type="submit">Create</Button>
    </Form>
  );
};

export default NewPet;
