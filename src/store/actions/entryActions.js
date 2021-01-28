// Create Entry Action
export const createEntry = (entry) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database

    // Initialize Firestore Database
    // Setup Database
    const db = getFirebase().firestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;

    // Add Entry to collection
    db.collection("entries")
      .add({
        // Id = auto
        ...entry, // Title, Content, and DiaryId
        createdAt: new Date(), // CreatedAt
      })
      .then((resp) => {
        // When Entry is added
        let entryId = resp.id;
        let diaryId = entry.diaryId;

        // Push Entry Id to Diary
        db.collection("diaries")
          .doc(entry.diaryId)
          .get()
          .then((snapshot) => {
            let entryIds = snapshot.data().entryIds;
            entryIds.push(entryId);
            // Push to diary entryIds
            db.collection("diaries")
              .doc(diaryId)
              .update({ entryIds: entryIds });
          });

        // Then dispatch an action
        dispatch({ type: "CREATE_ENTRY", entry });
      })
      .catch((err) => {
        // If anything goes wrong
        dispatch({ type: "CREATE_ENTRY_ERROR", err });
      });
  };
};

// Update Entry Action
export const updateEntry = (entry) => {
  return (dispatch, getState) => {
    // Make Async call to database
    // Then dispatch an action
    dispatch({ type: "UPDATE_ENTRY", entry });
  };
};
