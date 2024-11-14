// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDZzqwJhQ5OCE2pvtqC9vd5uEj3W8PSs",
  authDomain: "netflix-gpt-3bd34.firebaseapp.com",
  projectId: "netflix-gpt-3bd34",
  storageBucket: "netflix-gpt-3bd34.firebasestorage.app",
  messagingSenderId: "485042201685",
  appId: "1:485042201685:web:f2648d524a5e6939a020dc",
  measurementId: "G-P6VWYC9Z5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();