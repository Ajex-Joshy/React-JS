// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKjbliJ9p_PI-N64lb0rAfHtvUnyV9MpU",
  authDomain: "netflixgpt-47871.firebaseapp.com",
  projectId: "netflixgpt-47871",
  storageBucket: "netflixgpt-47871.firebasestorage.app",
  messagingSenderId: "811704673457",
  appId: "1:811704673457:web:910e3902816bab5ae36e90",
  measurementId: "G-4JN1G00FQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
