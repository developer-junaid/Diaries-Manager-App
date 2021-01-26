import authReducer from "./authReducer";
import entryReducer from "./entryReducer";
import diaryReducer from "./diaryReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  diary: diaryReducer,
  entry: entryReducer,
  firestore: firestoreReducer, // To sync local State with Database
});

export default rootReducer;
