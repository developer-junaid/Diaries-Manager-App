import { createNotification } from "./functions/functions";
import Swal from "sweetalert2";

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
        // Alert Success
        // Show alert
        Swal.fire({
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Logic
        });
      })
      .catch((err) => {
        // Identify the error
        if (err.code === "auth/wrong-password") {
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
        } else if (err.code === "auth/user-not-found") {
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
        } else if (err.code === "auth/too-many-requests") {
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
        // Fire the alert
        Swal.fire({
          icon: "success",
          title: "Signed Out !",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          // Logic
        });
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

        // Alert Success
        Swal.fire({
          icon: "success",
          title: "Signup Success!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Logic
        });

        // Add Notification for user joined
        const notification = {
          content: "Joined the party",
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: new Date(),
        };

        createNotification(db, notification, dispatch);
      })
      .catch((err) => {
        // Identify the error
        if (err.code === "auth/weak-password") {
          // Set error to auth/weak-password
          // Fire the alert
          Swal.fire({
            icon: "error",
            title: "Weak Password !",
            text: "Password should be at least 6 characters",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            // Logic
          });
        } else if (err.code === "auth/email-already-in-use") {
          // Fire the alert
          Swal.fire({
            icon: "error",
            title: "Account Already Exists !",
            text: "Email address is already in use by another account",
            showConfirmButton: false,
            timer: 2500,
          }).then(() => {
            // Logic
          });
        }

        // SignUp Error
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
