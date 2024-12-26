// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrsBAPBNjfrVzQ-P2hKG5IvWNaf_jgLA",
  authDomain: "online-job-portal-88e30.firebaseapp.com",
  projectId: "online-job-portal-88e30",
  storageBucket: "online-job-portal-88e30.firebasestorage.app",
  messagingSenderId: "681125735978",
  appId: "1:681125735978:web:874c8f89044d539e0cdd53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};