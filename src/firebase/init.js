import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCOrQy68EEP3XYgcLMrn8uvtOHuTAuoJzc",
  authDomain: "simple-chat-window.firebaseapp.com",
  databaseURL: "https://simple-chat-window.firebaseio.com",
  projectId: "simple-chat-window",
  storageBucket: "simple-chat-window.appspot.com",
  messagingSenderId: "15577626264",
  appId: "1:15577626264:web:4987015c9fa2afb6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
