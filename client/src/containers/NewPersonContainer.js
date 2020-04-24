import React from "react";
import NewPerson from "../views/NewPerson";
import { useNewPerson } from "../hooks/useNewPerson";

const NewPersonContainer = () => {
  const { state, handleChange, handleSubmit } = useNewPerson();
  const formTitle = "New Person";
  const formData = [
    {
      type: "text",
      value: state.name,
      name: "name",
      placeholder: "Name",
      required: true,
      handler: handleChange,
    },
    {
      type: "text",
      value: state.surname,
      name: "surname",
      placeholder: "Surname",
      required: true,
      handler: handleChange,
    },
    {
      type: "text",
      value: state.address,
      name: "address",
      placeholder: "Address",
      required: true,
      handler: handleChange,
    },
  ];
  return (
    <NewPerson
      formSubmit={handleSubmit}
      formData={formData}
      formTitle={formTitle}
    />
  );
};

export default NewPersonContainer;
