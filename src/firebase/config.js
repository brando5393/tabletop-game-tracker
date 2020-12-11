import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCkMwMLm7qXWqLI00N50f7KShRjFlmn2Tw",
  authDomain: "tabletop-game-tracker-react.firebaseapp.com",
  databaseURL: "https://tabletop-game-tracker-react.firebaseio.com",
  projectId: "tabletop-game-tracker-react",
  storageBucket: "tabletop-game-tracker-react.appspot.com",
  messagingSenderId: "278100487952",
  appId: "1:278100487952:web:bb656456e505533dc53f95",
  measurementId: "G-FBSJPPZL01",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
