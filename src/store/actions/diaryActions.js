// Create Diary Action
export const createDiary = (diary) => {
  return (dispatch, getState) => {
    // Make Async call to database
    // Then dispatch an action
    dispatch({ type: "CREATE_DIARY", diary });
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
