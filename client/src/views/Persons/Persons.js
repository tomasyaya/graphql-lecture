import React from "react";
import PersonCard from "../../components/PersonCard";
import Loader from "../../components/Loader";
import { MainContainer, Grid } from "./styles";

const Persons = ({ persons, loading, error }) => {
  if (error) return "sorry, something went wrong";

  if (loading) return <Loader />;

  const displayPersons = persons.map(({ id, ...pet }) => (
    <PersonCard key={id} {...pet} />
  ));

  return (
    <MainContainer>
      <Grid>{displayPersons}</Grid>
    </MainContainer>
  );
};

export default Persons;
