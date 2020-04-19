let pets = require("../data");
const auth = require("../auth");
const pubSub = require("../pubsub");

const NEW_ITEM = "NEW_ITEM";

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

module.exports = {
  Query: {
    getPet,
    getPets,
  },
  Mutation: {
    addPet,
    updatePet,
    removePet,
    createItem,
  },
  Subscription: {
    newItem: {
      subscribe: () => pubSub.asyncIterator(NEW_ITEM),
    },
  },
};
