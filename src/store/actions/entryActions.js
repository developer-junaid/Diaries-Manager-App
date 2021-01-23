// Create Entry Action
export const createEntry = (entry) => {
  return (dispatch, getState) => {
    // Make Async call to database
    // Then dispatch an action
    dispatch({ type: "CREATE_ENTRY", entry });
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
