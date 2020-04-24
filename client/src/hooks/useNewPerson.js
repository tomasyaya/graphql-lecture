import { useReducer } from "react";
import { newPetReducer, initialState } from "../reducers/newPersonReducer";
import { UPDATE_FIELDS, RESET_FIELDS } from "../constants";

export const useNewPerson = () => {
  const [state, dispatch] = useReducer(newPetReducer, initialState);

  const handleChange = ({ target }) =>
    dispatch({
      type: UPDATE_FIELDS,
      payload: { [target.name]: target.value },
    });

  const handleSubmit = async (e) => {
    console.log(e);
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
