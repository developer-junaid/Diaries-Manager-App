import Swal from "sweetalert2";

// Create Entry Action
export const createEntry = (entry) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database

    // Initialize Firestore Database
    const db = getFirebase().firestore();

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
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database
    // Then dispatch an action
    dispatch({ type: "UPDATE_ENTRY", entry });
  };
};

// Delete Entry Action
export const deleteEntry = (entry) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database
    // Initialize Firestore Database
    const db = getFirebase().firestore();

    // Confirmation alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete doc
        db.collection("entries")
          .doc(entry.id)
          .delete()
          .then(() => {
            // Entry Deleted
            // Then dispatch an action
            dispatch({ type: "DELETE_ENTRY", entry });
            Swal.fire("Deleted!", "Entry has been deleted.", "success");
          })
          .catch((err) => {
            // Entry delete error
            dispatch({ type: "DELETE_ENTRY_ERROR", err });
          });
      }
    });
  };
};
