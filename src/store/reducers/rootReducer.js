import authReducer from "./authReducer";
import entryReducer from "./entryReducer";
import diaryReducer from "./diaryReducer";
import dataReducer from "./dataReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  diary: diaryReducer,
  entry: entryReducer,
  data: dataReducer,
  firestore: firestoreReducer, // To sync local State with Database
  firebase: firebaseReducer, // To sync firebase authentication service with our local state
});

export default rootReducer;
