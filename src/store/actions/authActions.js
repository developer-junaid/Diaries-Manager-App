export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize firebase
    const firebase = getFirebase();

    // Sign In user
    firebase
      .auth()
      .signInWithEmailAndPassword(
        // Email and pwd
        credentials.email,
        credentials.password
      )
      .then(() => {
        // Login success
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        // Login Error
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
