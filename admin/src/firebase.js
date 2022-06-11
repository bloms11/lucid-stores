// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZJO4Xjej6QC9Yz4Gzd4vXyQKG400mgxQ",
  authDomain: "lucid-stores.firebaseapp.com",
  projectId: "lucid-stores",
  storageBucket: "lucid-stores.appspot.com",
  messagingSenderId: "139767050616",
  appId: "1:139767050616:web:11cc9073d87a6c5373188d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;