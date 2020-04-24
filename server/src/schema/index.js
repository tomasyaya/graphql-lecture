const { gql } = require("apollo-server");

const typeDefs = gql`
  type Item {
    name: String
  }

  type Person {
    id: ID!
    name: String
    surname: String
    address: String
  }

  input PersonInput {
    id: ID!
    name: String
    surname: String
    address: String
  }

  type Pet {
    id: ID!
    name: String
    breed: String
    age: Int
    img: String
  }

  input PetInput {
    id: ID!
    name: String
    breed: String
    age: Int
    img: String
  }

  input PaginationInput {
    page: Int
  }

  type Query {
    getPet(id: ID!): Pet
    getPets(page: Int): [Pet]
    getPersons: [Person]
  }

  type Mutation {
    addPet(input: PetInput): Pet
    updatePet(input: PetInput): [Pet]
    removePet(input: PetInput): [Pet]
    createPerson(input: PersonInput): Person
    createItem: Item
  }

  type Subscription {
    newItem: Item
  }
`;

module.exports = typeDefs;
