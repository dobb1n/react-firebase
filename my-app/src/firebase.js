import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw6MwygV1kdVVqGgwKjqBk4Wixy7fXo90",
  authDomain: "rsf-limited.firebaseapp.com",
  projectId: "rsf-limited",
  storageBucket: "rsf-limited.firebasestorage.app",
  messagingSenderId: "597438961097",
  appId: "1:597438961097:web:5d0db0c1a979b6f3c8c418",
  measurementId: "G-7VC5SC8VGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);

export default db;
