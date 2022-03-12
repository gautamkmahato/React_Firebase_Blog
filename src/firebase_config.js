// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP0PDypxJyMw8_Vom3nGUsfH5L_ZPz8AE",
  authDomain: "blog-project-bad5c.firebaseapp.com",
  projectId: "blog-project-bad5c",
  storageBucket: "blog-project-bad5c.appspot.com",
  messagingSenderId: "757786265382",
  appId: "1:757786265382:web:b8064165ea22a1536623e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
