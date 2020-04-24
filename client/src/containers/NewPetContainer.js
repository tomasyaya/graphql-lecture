import React from "react";
import NewPetView from "../views/NewPet";
import { useNewPet } from "../hooks/useNewPet";

const NewPetContainer = () => {
  const { handleChange, handleSubmit, state } = useNewPet();
  const formTitle = "New Pet";
  const formData = [
    {
      required: true,
      placeholder: "name",
      type: "text",
      name: "name",
      value: state.name,
      handler: handleChange,
    },
    {
      required: true,
      placeholder: "breed",
      type: "text",
      name: "breed",
      value: state.breed,
      handler: handleChange,
    },
    {
      required: true,
      placeholder: "age",
      type: "number",
      name: "age",
      value: state.age,
      handler: handleChange,
    },
  ];
  return (
    <NewPetView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      formTitle={formTitle}
    />
  );
};

export default NewPetContainer;
