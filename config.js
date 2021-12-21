import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCGXU9PhjqJAYParmzz5-3Q9Zv-0dg0c84",
  authDomain: "student-attendence-e85c8.firebaseapp.com",
  databaseURL: "https://student-attendence-e85c8-default-rtdb.firebaseio.com",
  projectId: "student-attendence-e85c8",
  storageBucket: "student-attendence-e85c8.appspot.com",
  messagingSenderId: "157999220098",
  appId: "1:157999220098:web:dbfbbbc315fbc8185bfb9b",
  measurementId: "G-P978RPKQWW"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
