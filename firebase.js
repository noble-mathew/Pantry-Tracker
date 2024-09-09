// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjX1UW00_0_JOIuv57QJuqyBg9yo43dQM",
  authDomain: "inventory-management-90068.firebaseapp.com",
  projectId: "inventory-management-90068",
  storageBucket: "inventory-management-90068.appspot.com",
  messagingSenderId: "122626390446",
  appId: "1:122626390446:web:8ee52a59269f1c188ff03f",
  measurementId: "G-5CV2MEQTQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}