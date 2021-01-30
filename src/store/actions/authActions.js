import { createNotification } from "./functions/functions";

// SignIn
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

// SignOut
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    // Sign Out
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign Out Success
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

// SignUp
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize firebase and firestore
    const firebase = getFirebase();
    const db = firebase.firestore();

    // SignUp user
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        // Create user in users collection with ID as user's id
        return db
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
        // returns Promise
      })
      .then(() => {
        // SignUp Success
        dispatch({ type: "SIGNUP_SUCCESS" });

        // Add Notification for user joined
        const notification = {
          content: "Joined the party",
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: new Date(),
        };

        createNotification(db, notification, dispatch);
      })
      .catch((err) => {
        // SignUp Error
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
