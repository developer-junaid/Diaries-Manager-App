// Initial State
const initialState = {
  authError: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN ERROR");
      return { ...state, authError: "Login failed" };

    case "LOGIN_SUCCESS":
      console.log("LOGIN SUCCESS");
      return { ...state, authError: null };

    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT SUCCESS");
      return state;

    default:
      return state;
  }
};

export default authReducer;
