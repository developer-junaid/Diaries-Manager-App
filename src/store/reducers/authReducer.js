import Swal from "sweetalert2";

// Initial State
const initialState = {
  authError: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      // Identify the error
      if (action.err.code === "auth/wrong-password") {
        // Set error to wrong-password
        // Fire the alert
        Swal.fire({
          icon: "error",
          title: "Password is incorrect !",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Empty the form
          window.location.reload(false);
        });
      } else if (action.err.code === "auth/user-not-found") {
        // Fire the alert
        Swal.fire({
          icon: "error",
          title: "User not found !",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Empty the form
          window.location.reload(false);
        });
      } else if (action.err.code === "auth/too-many-requests") {
        // Fire the alert
        Swal.fire({
          icon: "error",
          title: "Too many failed login attempts, please try again later !",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Empty the form
          window.location.reload(false);
        });
      }

      return { ...state, authError: action.err.message };

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
