import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyBGDD9xd89vlHyVcINP7eWVgzuou7yH0NE",
  authDomain: "diaries-manager.firebaseapp.com",
  projectId: "diaries-manager",
  storageBucket: "diaries-manager.appspot.com",
  messagingSenderId: "871095957098",
  appId: "1:871095957098:web:0e97f82ea4279ea4d5fc13",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); // Connect to firebase project
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
