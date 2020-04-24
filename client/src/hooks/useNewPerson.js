import { useReducer } from "react";
import { useMutation } from "@apollo/client";
import { createPerson } from "../graphql";
import { newPetReducer, initialState } from "../reducers/newPersonReducer";
import { UPDATE_FIELDS, RESET_FIELDS } from "../constants";

export const useNewPerson = () => {
  const [state, dispatch] = useReducer(newPetReducer, initialState);
  const [createNewPerson] = useMutation(createPerson);
  const handleChange = ({ target }) =>
    dispatch({
      type: UPDATE_FIELDS,
      payload: { [target.name]: target.value },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createNewPerson({
      variables: {
        input: {
          id: JSON.stringify(Math.floor(Math.random() * 1000)),
          name: state.name,
          surname: state.surname,
          address: state.address,
        },
      },
    });
    console.log("PERSON", data);
    dispatch({
      type: RESET_FIELDS,
    });
  };

  return {
    state,
    handleChange,
    handleSubmit,
  };
};
