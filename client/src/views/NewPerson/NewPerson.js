import React from "react";
import Form from "../../components/Form";

const NewPerson = ({ formData, formSubmit, formTitle }) => {
  return <Form data={formData} title={formTitle} submit={formSubmit} />;
};

export default NewPerson;
