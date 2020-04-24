import { useReducer } from "react";
import { useMutation } from "@apollo/client";
import swal from "sweetalert";
import { createPerson, getPersons } from "../graphql";
import { newPetReducer, initialState } from "../reducers/newPersonReducer";
import { UPDATE_FIELDS, RESET_FIELDS } from "../constants";

export const useNewPerson = () => {
  const [state, dispatch] = useReducer(newPetReducer, initialState);
  const [createNewPerson] = useMutation(createPerson, {
    update(cache, { data: { createPerson: newPerson } }) {
      const { getPersons: cachePersons } = cache.readQuery({
        query: getPersons,
      });
      const updatePersons = { getPersons: [newPerson, ...cachePersons] };
      cache.writeQuery({ query: getPersons, data: updatePersons });
    },
  });
  const handleChange = ({ target }) =>
    dispatch({
      type: UPDATE_FIELDS,
      payload: { [target.name]: target.value },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewPerson({
      variables: {
        input: {
          id: JSON.stringify(Math.floor(Math.random() * 1000)),
          name: state.name,
          surname: state.surname,
          address: state.address,
        },
      },
      optimisticResponse: {
        createPerson: {
          __typename: "Person",
          id: "233445",
          name: state.name,
          surname: state.surname,
          address: state.address,
        },
      },
    });
    dispatch({
      type: RESET_FIELDS,
    });
    swal({
      title: "Congratulations!",
      text: "Check the new pet in the feed",
      icon: "success",
    });
  };

  return {
    state,
    handleChange,
    handleSubmit,
  };
};
