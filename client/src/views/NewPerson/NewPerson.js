import React from "react";
import Form from "../../components/Form";

const NewPerson = ({ formData, formSubmit }) => {
  return <Form data={formData} submit={formSubmit} />;
};

export default NewPerson;
