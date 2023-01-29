export const signUp = (authData) => async (dispatch) => {
  dispatch({ type: "AUTH", authData });
};
