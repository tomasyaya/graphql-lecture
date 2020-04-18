import React from "react";
import PetCard from "../../components/PetCard";
import Loader from "../../components/Loader";
import { MainContainer, Grid } from "./styles";

const Pets = ({ pets, loading, error }) => {
  if (error) return "sory, something went wrong";

  if (loading) return <Loader />;

  const displayPets = pets.map(({ id, ...pet }) => (
    <PetCard key={id} {...pet} />
  ));
  return (
    <MainContainer>
      <Grid>{displayPets}</Grid>
    </MainContainer>
  );
};

export default Pets;
