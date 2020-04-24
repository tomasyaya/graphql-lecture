import React from "react";
import Form from "../Form";

const NewPet = ({ handleSubmit, formData, formTitle }) => (
  <Form submit={handleSubmit} data={formData} title={formTitle} />
);

export default NewPet;
