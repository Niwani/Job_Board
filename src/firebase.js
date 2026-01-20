// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUKTb0xZlRsxwcndaRtElyW8NndRb1LA0",
  authDomain: "job-board-a1173.firebaseapp.com",
  projectId: "job-board-a1173",
  storageBucket: "job-board-a1173.firebasestorage.app",
  messagingSenderId: "796034424223",
  appId: "1:796034424223:web:9e014e490bf098bc46f1aa",
  measurementId: "G-0NLTJMS15C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);