const initialState = {};

// Entry Reducer
const entryReducer = (state = initialState, action) => {
  // Take Actions
  switch (action.type) {
    // CREATE_ENTRY
    case "CREATE_ENTRY":
      console.log("created entry", action.entry);
      return state;

    //  UPDATE_ENTRY
    case "UPDATE_ENTRY":
      console.log("updated entry", action.entry);
      return state;

    default:
      return state;
  }
};

export default entryReducer;
