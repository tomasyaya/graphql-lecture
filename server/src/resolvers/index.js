let pets = require("../data");

const getPet = (_, { input }, ctx) => {
  return pets.find((pet) => pet.name === input.name);
};

const getPets = () => pets;

const addPet = (_, { input }, ctx) => {
  pets = [...pets, input];
  return pets;
};

const updatePet = (_, { input }, ctx) => {
  pets = pets.map((pet) =>
    pet.name === name ? (pet = { ...pet, ...input }) : pet
  );
  return pets;
};

const removePet = (_, { input }, ctx) => {
  pets = pets.filter((pet) => pet.name === input.name);
  return pets;
};

module.exports = {
  Query: {
    getPet,
    getPets,
  },
  Mutation: {
    addPet,
    updatePet,
    removePet,
  },
};
