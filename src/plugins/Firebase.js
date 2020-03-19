import Vue from "vue";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtUF3vQZFcu39BgniEGe1dBQvWqA2BGKQ",
  authDomain: "test-f7cca.firebaseapp.com",
  databaseURL: "https://test-f7cca.firebaseio.com",
  projectId: "test-f7cca",
  storageBucket: "test-f7cca.appspot.com",
  messagingSenderId: "1095530141590",
  appId: "1:1095530141590:web:50be55a3e50046dd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;

// firebase
//   .firestore()
//   .collection("test")
//   .add({ test: "aaa" })
//   .then(r => console.log(r))
//   .catch(e => console.error(e));
