// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

import{getFirestore} from'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjqYf76juq_MGjzI_Uw-GBwAPThGm5GCE",
  authDomain: "react-project-fccc6.firebaseapp.com",
  projectId: "react-project-fccc6",
  storageBucket: "react-project-fccc6.appspot.com",
  messagingSenderId: "935752499393",
  appId: "1:935752499393:web:6b6c0e29bcb582a4c35440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
