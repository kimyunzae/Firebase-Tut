// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAOekGOKUmLUfCgzAy1eakb7Li-JlUpBI",
  authDomain: "fir-tutorial-5b4fc.firebaseapp.com",
  projectId: "fir-tutorial-5b4fc",
  storageBucket: "fir-tutorial-5b4fc.appspot.com",
  messagingSenderId: "304016609126",
  appId: "1:304016609126:web:34b1da46678491673e42a7",
  measurementId: "G-RV2XW5J310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

