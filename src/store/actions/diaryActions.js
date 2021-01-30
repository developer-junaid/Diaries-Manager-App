import { createNotification } from "./functions/functions";

// Create Diary Action
export const createDiary = (diary) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database
    // Initialize Firestore Database
    // Setup Database
    const db = getFirebase().firestore();
    const profile = getState().firebase.profile; // Get User's Profile
    const authorId = getState().firebase.auth.uid; // Get User Id

    // Add Diary to collection
    db.collection("diaries")
      .add({
        ...diary, // Title and type
        authorFirstName: profile.firstName, // authorFirstName
        authorLastName: profile.lastName, // authorLastName
        authorId: authorId, // authorId
        createdAt: new Date(), // createdAt
      })
      .then(() => {
        // When Diary is added
        // Then dispatch an action
        dispatch({ type: "CREATE_DIARY", diary });

        // // Create Notification
        const notification = {
          content: "Added a new project",
          user: `${profile.firstName} ${profile.lastName}`,
          time: new Date(),
        };

        createNotification(db, notification, dispatch);
      })
      .catch((err) => {
        // If anything goes wrong
        dispatch({ type: "CREATE_DIARY_ERROR", err });
      });
  };
};

// Update Diary Action
export const updateDiary = (diary) => {
  return (dispatch, getState) => {
    // Make Async call to database
    // Then dispatch an action
    dispatch({ type: "UPDATE_DIARY", diary });
  };
};
