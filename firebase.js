// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXCIGsbV69TWh5GV3PXEuXXjZnoq2K6eI",
  authDomain: "twitter-clone-1ba42.firebaseapp.com",
  projectId: "twitter-clone-1ba42",
  storageBucket: "twitter-clone-1ba42.appspot.com",
  messagingSenderId: "398766827101",
  appId: "1:398766827101:web:ea2362db89301af8ec4fb4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
