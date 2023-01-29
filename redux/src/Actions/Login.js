export const logIn = (authData) => async (dispatch) => {
  dispatch({ type: "LOGIN", authData });
};
