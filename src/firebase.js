// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS5teJE6WmEi7pusZ9Jq60bgWebwvg0u0",
  authDomain: "facebook-clone-da101.firebaseapp.com",
  projectId: "facebook-clone-da101",
  storageBucket: "facebook-clone-da101.appspot.com",
  messagingSenderId: "957483115551",
  appId: "1:957483115551:web:2496c362e920ff817fa12a",
  measurementId: "G-21079KKSVH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db =firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider} ;
export  default db;
