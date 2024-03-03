// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYJCd_wgwGrg7lMetD7bNLKpCovfLOcyU",
  authDomain: "moviedb-8eee9.firebaseapp.com",
  projectId: "moviedb-8eee9",
  storageBucket: "moviedb-8eee9.appspot.com",
  messagingSenderId: "491201009866",
  appId: "1:491201009866:web:4dbf2e5379cee51dab3c33",
  measurementId: "G-CKD1QB6MMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);