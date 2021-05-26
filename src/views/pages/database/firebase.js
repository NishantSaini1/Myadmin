import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAcYWY-lLE0x8uOcFmdDbWx12HHVyEGk4E",
    authDomain: "react-login-2003a.firebaseapp.com",
    databaseURL: "https://react-login-2003a-default-rtdb.firebaseio.com",
    projectId: "react-login-2003a",
    storageBucket: "react-login-2003a.appspot.com",
    messagingSenderId: "708671458180",
    appId: "1:708671458180:web:849e700cc906d8fa526bd1",
    measurementId: "G-L641MHGR35"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
   const storage = firebase.storage();

  export  {
    storage, fire as default
  }