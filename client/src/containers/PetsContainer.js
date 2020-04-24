import React from "react";
import { usePets } from "../hooks/usePets";
import Pets from "../views/Pets";

const PetsContainer = () => {
  const { loading, error, data, handleFetchMore } = usePets();
  let pets = data ? data.getPets : [];
  return (
    <Pets
      loading={loading}
      error={error}
      pets={pets}
      handleFetchMore={handleFetchMore}
    />
  );
};

export default PetsContainer;
