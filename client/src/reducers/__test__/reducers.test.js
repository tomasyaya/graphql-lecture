import { newPetReducer } from "../newPetReducer";

describe("should return correct state", () => {
  it("should give back the correct state", () => {
    const action = { type: "UPDATE_FIELDS", payload: { name: "tomas" } };
    let state = newPetReducer({}, action);
    expect(state.name).toEqual("tomas");

    state = newPetReducer(state, {
      type: "UPDATE_FIELDS",
      payload: { breed: "buldog" },
    });
    expect(state).toEqual({ name: "tomas", breed: "buldog" });

    state = newPetReducer(state, {
      type: "RESET_FIELDS",
    });
    expect(state).toEqual({ name: "", breed: "", age: "" });
  });
});
