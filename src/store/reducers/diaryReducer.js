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
        {
          id: "3",
          title: "Do darya restaurant",
          content: "We did dinner there",
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
        {
          id: "2",
          title: "Boulevard Mall",
          content: "We did shopping and eating there",
        },
        {
          id: "3",
          title: "Hyderabad Darbar",
          content: "We did dinner there, it was fun",
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

// Auth Reducer
const diaryReducer = (state = initialState, action) => {
  return state;
};

export default diaryReducer;
