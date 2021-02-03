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
    // Initialize db
    const db = getFirebase().firestore();

    const collection = "entries";
    const id = entry.entryId;
    const newTitle = entry.title;
    const newContent = entry.content;

    // update entry
    const entryToUpdate = db.collection(collection).doc(id);

    entryToUpdate
      .update({
        title: newTitle,
        content: newContent,
      })
      .then(() => {
        // Entry Updated
        // Then dispatch an action
        dispatch({ type: "UPDATE_ENTRY", entry });
      })
      .catch((err) => {
        // If anything goes wrong
        dispatch({ type: "UPDATE_ENTRY_ERROR", err });
      });
  };
};

// Delete Entry Action
export const deleteEntry = (entry) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database
    // Initialize Firestore Database
    const db = getFirebase().firestore();
    const diaryId = entry.diaryId;
    const entryToDelete = entry.id;
    const diary = db.collection("diaries").doc(diaryId);

    diary.get().then((snapshot) => {
      let entryIds = snapshot.data().entryIds;
      const result = entryIds.filter((entryId) => entryId !== entryToDelete);
      // Push to diary entryIds
      db.collection("diaries")
        .doc(diaryId)
        .update({ entryIds: result })
        .then(() => {
          // Delete entry

          // Delete doc
          db.collection("entries")
            .doc(entry.id)
            .delete()
            .then(() => {
              // Entry Deleted
              // Then dispatch an action
              dispatch({ type: "DELETE_ENTRY", entry });
              Swal.fire("Deleted!", "Entry has been deleted.", "success").then(
                () => {
                  // logic
                }
              );
            })
            .catch((err) => {
              // Entry delete error
              dispatch({ type: "DELETE_ENTRY_ERROR", err });
            });
        });
    });
  };
};
