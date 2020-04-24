import React from "react";
import PersonCard from "../../components/PersonCard";
import Suspense from "../../components/Suspense";
import { MainContainer, Grid } from "./styles";

const Persons = ({ persons = [], loading, error }) => {
  const displayPersons = persons.map(({ id, ...pet }) => (
    <PersonCard key={id} {...pet} />
  ));

  return (
    <Suspense error={error} loading={loading}>
      <MainContainer>
        <Grid>{displayPersons}</Grid>
      </MainContainer>
    </Suspense>
  );
};

export default Persons;
