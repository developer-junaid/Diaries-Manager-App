// Initial State
const data = {
  showOtherDiaries: true,
};

// Data Reducer
const dataReducer = (state = data, action) => {
  switch (action.type) {
    case "UDPATE_SHOW_DIARIES":
      return { ...state, showOtherDiaries: action.value };

    default:
      return state;
  }
};

export default dataReducer;
