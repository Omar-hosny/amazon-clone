import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6VjyZi4vkcLsh0lZbVl2-viVPVd6IRew",
  authDomain: "clone-9cb73.firebaseapp.com",
  databaseURL: "https://clone-9cb73.firebaseio.com",
  projectId: "clone-9cb73",
  storageBucket: "clone-9cb73.appspot.com",
  messagingSenderId: "325836720575",
  appId: "1:325836720575:web:11654fe643daf86d33390a",
  measurementId: "G-C3KRCWY2XE",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
