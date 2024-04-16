// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLhjC2YkTwlaH4nknbjEWxwX8rISrkS1o",
  authDomain: "real-estate-d3686.firebaseapp.com",
  projectId: "real-estate-d3686",
  storageBucket: "real-estate-d3686.appspot.com",
  messagingSenderId: "152022874383",
  appId: "1:152022874383:web:c2209cec632fddf3c6667a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;