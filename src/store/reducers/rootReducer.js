import authReducer from "./authReducer";
import entryReducer from "./entryReducer";
import diaryReducer from "./diaryReducer";
import { combineReducers } from "redux";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  diary: diaryReducer,
  entry: entryReducer,
});

export default rootReducer;
