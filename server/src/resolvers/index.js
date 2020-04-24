let pets = require("../data/pets");
let persons = require("../data/persons");
const mockPerson = require("../mocks");
const auth = require("../auth");
const pubSub = require("../pubsub");

const NEW_ITEM = "NEW_ITEM";

// ----- PETS -------

const getPet = (_, { input }, ctx) => {
  return pets.find((pet) => pet.name === input.name);
};

const getPets = auth((_, { page }, ctx) => {
  return pets.slice((page - 1) * 4, page * 4);
});

const addPet = (_, { input }, ctx) => {
  pets = [...pets, input];
  return input;
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

const createItem = () => {
  const item = { name: "NEW ITEM!!" };
  pubSub.publish(NEW_ITEM, { newItem: item });
  return item;
};

// ---- PERSONS ------

const getPersons = (_, args, ctx) => persons;

const createPerson = async (_, { input }, ctx) => {
  const newPerson = { ...input };
  console.log(newPerson);
  const person = await mockPerson(newPerson);
  return person;
};

module.exports = {
  Query: {
    getPet,
    getPets,
    getPersons,
  },
  Mutation: {
    addPet,
    updatePet,
    removePet,
    createItem,
    createPerson,
  },
  Subscription: {
    newItem: {
      subscribe: () => pubSub.asyncIterator(NEW_ITEM),
    },
  },
};
