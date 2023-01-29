const userReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, data: action?.authData };
    default:
      return state;
  }
};

export default userReducer;
