const { gql } = require("apollo-server");

const typeDefs = gql`
  type Pet {
    id: ID
    name: String
    breed: String
    age: Int
  }

  input PetInput {
    id: ID
    name: String
    breed: String
    age: Int
  }

  type Query {
    getPet(input: PetInput): Pet
    getPets: [Pet]
  }

  type Mutation {
    addPet(input: PetInput): [Pet]
    updatePet(input: PetInput): [Pet]
    removePet(input: PetInput): [Pet]
  }
`;

module.exports = typeDefs;
