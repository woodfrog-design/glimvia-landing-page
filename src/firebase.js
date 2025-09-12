// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_4K4fPdHnCNlLnkdhnCBLqE44GH-HwTo",
  authDomain: "glimvia-wb.firebaseapp.com",
  projectId: "glimvia-wb",
  storageBucket: "glimvia-wb.firebasestorage.app",
  messagingSenderId: "1072566810723",
  appId: "1:1072566810723:web:cfe6ad9ec83ccff3056056",
  measurementId: "G-WCMDJP77KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database and export it
export const db = getFirestore(app);

export default app;