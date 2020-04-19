import { useReducer } from "react";
import { useMutation } from "@apollo/client";
import { addPet, getPets } from "../graphql";
import { newPetReducer, initialState } from "../reducers/newPetReducer";
import { RESET_FIELDS, UPDATE_FIELDS } from "../constants";
import { imagePicker } from "../helpers/imagePicker";

export const useNewPet = () => {
  const [state, dispatch] = useReducer(newPetReducer, initialState);
  const [addNewPet] = useMutation(addPet, {
    update(cache, { data: { addPet: newPet } }) {
      const { getPets: cachePets } = cache.readQuery({ query: getPets });
      const updatePets = {
        getPets: [newPet, ...cachePets],
      };
      cache.writeQuery({ query: getPets, data: updatePets });
    },
  });
  const handleChange = ({ target }) =>
    dispatch({
      type: UPDATE_FIELDS,
      payload: { [target.name]: target.value },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addNewPet({
      variables: {
        input: {
          name: state.name,
          age: parseInt(state.age),
          breed: state.breed,
          id: Math.floor(Math.random() * 1000),
          img: imagePicker(),
        },
      },
    });
    console.log("ressspuesea", res);
    dispatch({
      type: RESET_FIELDS,
    });
  };

  return {
    handleChange,
    handleSubmit,
    state,
  };
};
