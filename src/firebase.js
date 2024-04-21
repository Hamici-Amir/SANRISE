// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-84202.firebaseapp.com",
  projectId: "blog-app-84202",
  storageBucket: "blog-app-84202.appspot.com",
  messagingSenderId: "485399417556",
  appId: "1:485399417556:web:3e78145f0bfcf4a1796141"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/*


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAndMSGIX-09Pi7iqI8W66te6sznpicaCc",
  authDomain: "blog-app-84202.firebaseapp.com",
  projectId: "blog-app-84202",
  storageBucket: "blog-app-84202.appspot.com",
  messagingSenderId: "485399417556",
  appId: "1:485399417556:web:3e78145f0bfcf4a1796141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);















*/