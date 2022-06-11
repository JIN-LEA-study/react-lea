//firebase 최신 문법
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC82AU3ThnOcX4elVHYdQQBWn-02cy0ti8",
  authDomain: "react-community-39eab.firebaseapp.com",
  projectId: "react-community-39eab",
  storageBucket: "react-community-39eab.appspot.com",
  messagingSenderId: "514593524672",
  appId: "1:514593524672:web:42ab2d07f3a9f689bcd625",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
