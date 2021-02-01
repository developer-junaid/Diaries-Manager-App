const initialState = {};

// Entry Reducer
const entryReducer = (state = initialState, action) => {
  // Take Actions
  switch (action.type) {
    // CREATE_ENTRY
    case "CREATE_ENTRY":
      console.log("created entry", action.entry);
      return state;

    // CREATE_ENTRY_ERROR
    case "CREATE_ENTRY_ERROR":
      console.log("problem creating entry", action.err);
      return state;

    //  UPDATE_ENTRY
    case "UPDATE_ENTRY":
      console.log("updated entry", action.entry);
      return state;

    //  DELETE_ENTRY
    case "DELETE_ENTRY":
      console.log("Deleted entry", action.entry);
      return state;

    //  DELETE_ENTRY_ERROR
    case "DELETE_ENTRY_ERROR":
      console.log("Deleted entry error: ", action.err);
      return state;

    default:
      return state;
  }
};

export default entryReducer;
