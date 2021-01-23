// Initial State
const initialState = {
  diaries: [
    {
      id: "1",
      title: "Journey to Karachi",
      type: "private",
      entries: [
        {
          id: "1",
          title: "Seaview",
          content: "We enjoyed alot, on horses and cars and water",
        },
        {
          id: "2",
          title: "Dolmen Mall",
          content: "We did shopping and eating",
        },
      ],
    },
    {
      id: "2",
      title: "Journey to Hyderabad",
      type: "public",
      entries: [
        {
          id: "1",
          title: "Resham gali",
          content: "We enjoyed alot, purchasing clothes",
        },
      ],
    },
    {
      id: "3",
      title: "Journey to Quetta",
      type: "private",
      entries: [
        {
          id: "1",
          title: "Mountains",
          content: "We enjoyed alot, on mountains",
        },
        {
          id: "2",
          title: "Pathan shop",
          content: "We did seating",
        },
        {
          id: "3",
          title: "Snowfalls",
          content: "We enjoyed alot",
        },
      ],
    },
  ],
};

// Diary Reducer
const diaryReducer = (state = initialState, action) => {
  // Take Actions
  switch (action.type) {
    // CREATE_DIARY
    case "CREATE_DIARY":
      console.log("created diary", action.diary);
      return state;

    // UPDATE DIARY
    case "UPDATE_DIARY":
      console.log("updated diary", action.diary);
      return state;

    default:
      return state;
  }
};

export default diaryReducer;
