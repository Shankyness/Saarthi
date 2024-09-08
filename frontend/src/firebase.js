// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "saarthi-b8690.firebaseapp.com",
  projectId: "saarthi-b8690",
  storageBucket: "saarthi-b8690.appspot.com",
  messagingSenderId: "897685951796",
  appId: "1:897685951796:web:b95e9cb5953d3bf3780161"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);