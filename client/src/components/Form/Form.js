import React from "react";
import { Form, Input, Button } from "./styles";

const Form = ({ data, submit }) => {
  const displayInputs = data.map(
    ({ type, name, value, handler, required, placeholder }) => (
      <Input
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
    <Form>
      {displayInputs} <Button onClick={submit}>Add</Button>
    </Form>
  );
};
