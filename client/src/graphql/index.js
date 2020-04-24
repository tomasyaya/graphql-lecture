import { gql } from "@apollo/client";

export const getPets = gql`
  query GetPets($page: Int) {
    getPets(page: $page) {
      id
      name
      breed
      age
      img
    }
  }
`;

export const getPet = gql`
  query GetPet($input: PetInput) {
    getPet(input: $input) {
      id
      name
      breed
      age
      img
    }
  }
`;

export const addPet = gql`
  mutation AddPet($input: PetInput) {
    addPet(input: $input) {
      id
      name
      breed
      age
      img
    }
  }
`;

export const getPersons = gql`
  query GetPersons {
    getPersons {
      id
      name
      surname
      address
    }
  }
`;

export const createPerson = gql`
  mutation CreatePerson($input: PersonInput) {
    createPerson(input: $input) {
      id
      name
      surname
      address
    }
  }
`;
