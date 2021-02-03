// Initial State
const initialState = {
  authError: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return state;

    case "LOGIN_SUCCESS":
      return { ...state, authError: null };

    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message, // Error Message
      };

    default:
      return state;
  }
};

export default authReducer;
