import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6tdIKhA1sQMxUDl0KkYvYq0XArLkjBcY",
  authDomain: "twitterred-cfa8b.firebaseapp.com",
  databaseURL: "https://twitterred-cfa8b.firebaseio.com",
  projectId: "twitterred-cfa8b",
  storageBucket: "twitterred-cfa8b.appspot.com",
  messagingSenderId: "640721770585",
  appId: "1:640721770585:web:35c87799dca6a20d94b948",
  measurementId: "G-DSLXT0TQBM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
