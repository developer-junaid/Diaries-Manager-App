import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Redux
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
// Firebase
import firebase from "./config/fbConfig";
import {
  isLoaded,
  ReactReduxFirebaseProvider,
  getFirebase,
} from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

// Store and setup thunk
// By applying thunk we can return functions in our action creators
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

// RRF Config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

// React Redux Firebase - Props
const rrfProps = {
  firebase,
  config: rrfConfig, // For setting up users,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// Auth Is Loaded function
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div></div>;
  return children;
}

// Render
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// // Render
// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <AuthIsLoaded>
//         <App />
//       </AuthIsLoaded>
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
