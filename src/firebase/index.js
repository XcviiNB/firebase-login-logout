// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAhjLnP-ivI8Q3237tsYQ91l6HAe77DQI",
  authDomain: "registertry-b17c5.firebaseapp.com",
  projectId: "registertry-b17c5",
  storageBucket: "registertry-b17c5.appspot.com",
  messagingSenderId: "363686295023",
  appId: "1:363686295023:web:65571dd2a841eb5a0eb21a",
  measurementId: "G-CXFLJXKBKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }