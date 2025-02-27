// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_CuxOjeVZz4k63notHJUg-47qJ4vUSlw",
  authDomain: "protfolio-6b48a.firebaseapp.com",
  projectId: "protfolio-6b48a",
  storageBucket: "protfolio-6b48a.firebasestorage.app",
  messagingSenderId: "399668289517",
  appId: "1:399668289517:web:2e5e5a1a0542b3dbf851e4",
  measurementId: "G-FTHZJK0NTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
