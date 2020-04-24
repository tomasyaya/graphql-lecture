import React from "react";
import { StyledForm, Input, Button, Title } from "./styles";

const Form = ({ data = [], submit, title }) => {
  const displayInputs = data.map(
    ({ type, name, value, handler, required, placeholder }) => (
      <Input
        key={name}
        placeholder={placeholder}
        required={required}
        onChange={handler}
        value={value}
        name={name}
        type={type}
      />
    )
  );
  return (
    <StyledForm onSubmit={submit}>
      <Title>{title}</Title>
      {displayInputs}
      <Button type="submit">Add</Button>
    </StyledForm>
  );
};

export default Form;
