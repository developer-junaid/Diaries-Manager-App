const initialState = {};

// Entry Reducer
const entryReducer = (state = initialState, action) => {
  // Take Actions
  switch (action.type) {
    // CREATE_ENTRY
    case "CREATE_ENTRY":
      return state;

    // CREATE_ENTRY_ERROR
    case "CREATE_ENTRY_ERROR":
      return state;

    //  UPDATE_ENTRY
    case "UPDATE_ENTRY":
      return state;

    //  UPDATE_ENTRY_ERROR
    case "UPDATE_ENTRY_ERROR":
      return state;

    //  DELETE_ENTRY
    case "DELETE_ENTRY":
      return state;

    //  DELETE_ENTRY_ERROR
    case "DELETE_ENTRY_ERROR":
      return state;

    default:
      return state;
  }
};

export default entryReducer;
