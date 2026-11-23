// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC_zdKo-D2JMCa3lRwDxTT2N_BCSWUOW38",
  authDomain: "clone-8cd14.firebaseapp.com",
  projectId: "clone-8cd14",
  storageBucket: "clone-8cd14.firebasestorage.app",
  messagingSenderId: "729497363541",
  appId: "1:729497363541:web:4f3b784e1064d0704760dc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = app.firestore()