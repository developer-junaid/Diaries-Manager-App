// SignOut
export const setShowOtherDiaries = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "UDPATE_SHOW_DIARIES", value });
  };
};
