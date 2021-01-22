// Create Diary Action
export const createDiary = (diary) => {
  return (dispatch, getState) => {
    // Make Async call to database
    // Then dispatch an action
    dispatch({ type: "CREATE_DIARY", diary });
  };
};
