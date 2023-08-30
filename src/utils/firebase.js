// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnnVwAK0FacL_3T_w7AwITPIgNSIRSp28",
  authDomain: "netflixgpt-bbedd.firebaseapp.com",
  projectId: "netflixgpt-bbedd",
  storageBucket: "netflixgpt-bbedd.appspot.com",
  messagingSenderId: "251321276319",
  appId: "1:251321276319:web:e1f5575ab966f8a2274faa",
  measurementId: "G-20QE2KCPZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
