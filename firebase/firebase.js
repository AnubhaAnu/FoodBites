// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKX9soPESR4amg0h_dguZQYePuZHi7yJ4",
  authDomain: "foodapps-anu.firebaseapp.com",
  projectId: "foodapps-anu",
  storageBucket: "foodapps-anu.appspot.com",
  messagingSenderId: "85485883711",
  appId: "1:85485883711:web:8373396bd148688322438a",
  measurementId: "G-6DKQ7GCXKZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
