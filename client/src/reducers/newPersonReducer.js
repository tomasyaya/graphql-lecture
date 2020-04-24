import { RESET_FIELDS, UPDATE_FIELDS } from "../constants";
export const initialState = {
  name: "",
  surname: "",
  address: "",
};

export const newPetReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_FIELDS:
      return {
        ...state,
        ...payload,
      };
    case RESET_FIELDS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
