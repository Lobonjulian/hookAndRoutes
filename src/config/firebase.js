// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI40whMhSxoaXaQEru78p7pwL0hCNMAh0",
  authDomain: "app-inicial-527.firebaseapp.com",
  projectId: "app-inicial-527",
  storageBucket: "app-inicial-527.appspot.com",
  messagingSenderId: "603945784260",
  appId: "1:603945784260:web:7a9049ad3e46dff0840a91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = ({ email, password }) =>
  signInWithEmailAndPassword(email, password, auth);

export const register = ({ email, password }) =>
  createUserWithEmailAndPassword(email, password, auth);

export const logOut = () => signOut(auth);
