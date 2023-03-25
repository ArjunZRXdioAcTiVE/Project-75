import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDasgOia1HDtfwaHmipZZ7Jw-hrJe0-mMc",
  authDomain: "project-75-c3f67.firebaseapp.com",
  projectId: "project-75-c3f67",
  storageBucket: "project-75-c3f67.appspot.com",
  messagingSenderId: "21178320674",
  appId: "1:21178320674:web:5bf92a01ed65a083d1c77b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
