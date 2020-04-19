import React from "react";
import { useQuery } from "@apollo/client";

import { getPets } from "../graphql";
import Pets from "../views/Pets";

const PetsContainer = () => {
  const { loading, error, data } = useQuery(getPets);
  console.log(data);
  let pets = data ? data.getPets : [];
  return <Pets loading={loading} error={error} pets={pets} />;
};

export default PetsContainer;
