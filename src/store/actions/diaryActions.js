// Create Diary Action
export const createDiary = (diary) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database
    // Initialize Firestore Database
    // Setup Database
    const firestore = getFirebase().firestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;

    // Add Diary to collection
    firestore
      .collection("diaries")
      .add({
        ...diary, // Title and type
        authorFirstName: "Hassan",
        authorLastName: "Raza",
        authorId: 46,
        createdAt: new Date(),
      })
      .then(() => {
        // When Diary is added
        // Then dispatch an action
        dispatch({ type: "CREATE_DIARY", diary });
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
