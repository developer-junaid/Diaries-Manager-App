import { createNotification } from "./functions/functions";
import Swal from "sweetalert2";

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

        if (diary.type === "public") {
          // // Create Notification
          const notification = {
            content: "Added a new project",
            user: `${profile.firstName} ${profile.lastName}`,
            time: new Date(),
          };

          createNotification(db, notification, dispatch);
        }
      })
      .catch((err) => {
        // If anything goes wrong
        dispatch({ type: "CREATE_DIARY_ERROR", err });
      });
  };
};

// Update Diary Action
export const updateDiary = (diary) => {
  return (dispatch, getState, { getFirebase }) => {
    // Make Async call to database
    // Initilalize db
    const db = getFirebase().firestore();

    const collection = "diaries";
    const id = diary.diaryId;
    const newTitle = diary.title;
    const newType = diary.type;

    // update entry
    const diaryToUpdate = db.collection(collection).doc(id);

    diaryToUpdate
      .update({
        title: newTitle,
        type: newType,
      })
      .then(() => {
        // Diary Updated
        // Then dispatch an action
        dispatch({ type: "UPDATE_DIARY", diary });
      })
      .catch((err) => {
        // If anything goes wrong
        dispatch({ type: "UPDATE_DIARY_ERROR", err });
      });
  };
};

// Delete Diary Action
export const deleteDiary = (diary) => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize Firestore Database
    const db = getFirebase().firestore();

    // Delete entries
    const deleteEntries = async () => {
      return await Promise.all(
        diary.entryIds.map(async (entryId) => {
          const data = await db.collection("entries").doc(entryId).delete();
        })
      );
    };

    const deleteEntryIds = async () => {
      // delete entries first
      const wait = await deleteEntries();

      // After entries are deleted
      // Delete diary

      db.collection("diaries")
        .doc(diary.id)
        .delete()
        .then(() => {
          // Diary Deleted
          // Then dispatch an action
          dispatch({ type: "DELETE_DIARY" });
          Swal.fire("Deleted!", "Diary has been deleted.", "success");
        })
        .catch((err) => {
          // Entry delete error
          dispatch({ type: "DELETE_DIARY_ERROR", err });
        });
    };

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
        // Call delete
        deleteEntryIds();
      }
    });
  };
};
