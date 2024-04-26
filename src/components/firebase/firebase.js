// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9B9eJLcBXLjbpcP7lZRIliVRYfBDf4j4",
  authDomain: "b9a10-art-craft-store.firebaseapp.com",
  projectId: "b9a10-art-craft-store",
  storageBucket: "b9a10-art-craft-store.appspot.com",
  messagingSenderId: "260996407035",
  appId: "1:260996407035:web:e0a1e3e812cbdad2b35a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;