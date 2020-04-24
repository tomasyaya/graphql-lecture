import React from "react";
import Suspense from "../../components/Suspense";
import PetCard from "../../components/PetCard";
import { MainContainer, Grid, Button } from "./styles";

const Pets = ({ pets = [], loading, error, handleFetchMore }) => {
  const displayPets = pets.map(({ id, ...pet }) => (
    <PetCard key={id} {...pet} />
  ));
  return (
    <Suspense error={error} loading={loading}>
      <MainContainer>
        <Grid>{displayPets}</Grid>
        <Button onClick={handleFetchMore}>More</Button>
      </MainContainer>
    </Suspense>
  );
};

export default Pets;
