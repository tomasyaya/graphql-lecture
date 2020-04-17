import { gql } from "@apollo/client";

export const getPets = gql`
  query GetPets {
    getPets {
      name
      breed
      age
    }
  }
`;

export const getPet = gql`
  query GetPet($input: PetInput) {
    getPet(input: $input) {
      name
      breed
      age
    }
  }
`;

export const addPet = gql`
  mutation AddPet($input: PetInput) {
    addPet(input: $input) {
      name
      breed
      age
    }
  }
`;
