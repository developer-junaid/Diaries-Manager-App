// Initial State
const initialState = {
  authError: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error", action.err);
      return state;

    case "LOGIN_SUCCESS":
      console.log("LOGIN SUCCESS");
      return { ...state, authError: null };

    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT SUCCESS");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("SIGNUP SUCCESS");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      console.log("SIGNUP ERROR", action.err);
      return {
        ...state,
        authError: action.err.message, // Error Message
      };

    default:
      return state;
  }
};

export default authReducer;
