import React from "react";
import Persons from "../views/Persons";
import { usePersons } from "../hooks/usePersons";

const PersonsContainer = () => {
  const { data: { getPersons } = {}, loading, error } = usePersons();
  return <Persons persons={getPersons} loading={loading} error={error} />;
};

export default PersonsContainer;
