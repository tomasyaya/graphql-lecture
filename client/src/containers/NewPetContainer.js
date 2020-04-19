import React from "react";
import NewPetView from "../views/NewPet";
import { useNewPet } from "../hooks/useNewPet";

const NewPetContainer = () => {
  const { handleChange, handleSubmit, state } = useNewPet();
  return (
    <NewPetView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
};

export default NewPetContainer;
