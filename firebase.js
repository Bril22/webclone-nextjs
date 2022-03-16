// import the function
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhKNkqXl7rXPpWsp1THa-H1YFTttNC-D8",
  authDomain: "tmdbclonebril.firebaseapp.com",
  projectId: "tmdbclonebril",
  storageBucket: "tmdbclonebril.appspot.com",
  messagingSenderId: "13676275148",
  appId: "1:13676275148:web:b499dfbcac870cb6ef2969",
  measurementId: "G-KLKED7ZY1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();

export { db };