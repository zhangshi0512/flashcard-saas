// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore SDK
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgQE8JeKQ4PfZO_jgkY4eoSHGAIeMFYdA",
  authDomain: "flashcard-saas-2fc15.firebaseapp.com",
  projectId: "flashcard-saas-2fc15",
  storageBucket: "flashcard-saas-2fc15.appspot.com",
  messagingSenderId: "460168101983",
  appId: "1:460168101983:web:33487a0868a951b23d5bea",
  measurementId: "G-44T4B1GLRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Add this line to initialize Firestore

export { db };
