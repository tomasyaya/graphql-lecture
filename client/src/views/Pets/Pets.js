import React from "react";
import Loader from "../../components/Loader";
import PetCard from "../../components/PetCard";
import { MainContainer, Grid, Button } from "./styles";

const Pets = ({ pets, loading, error, handleFetchMore }) => {
  if (error) return "sorry, something went wrong";

  if (loading) return <Loader />;

  const displayPets = pets.map(({ id, ...pet }) => (
    <PetCard key={id} {...pet} />
  ));
  return (
    <MainContainer>
      <Grid>{displayPets}</Grid>
      <Button onClick={handleFetchMore}>More</Button>
    </MainContainer>
  );
};

export default Pets;
