// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS34iFOErq0QvLw0XXniOyEgyKIX76TR0",
  authDomain: "memoria-e46b8.firebaseapp.com",
  projectId: "memoria-e46b8",
  storageBucket: "memoria-e46b8.appspot.com",
  messagingSenderId: "531687869478",
  appId: "1:531687869478:web:883f2033246c5b24046ae7",
  measurementId: "G-KR03QFWJB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};