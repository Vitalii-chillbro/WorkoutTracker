// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyD7ZtL8mWvxrUs2P02T1aqacrz7rcMwxuE",
  authDomain: "workouttracker-e1bb1.firebaseapp.com",
  projectId: "workouttracker-e1bb1",
  storageBucket: "workouttracker-e1bb1.appspot.com",
  messagingSenderId: "271807073484",
  appId: "1:271807073484:web:009b7c0046df712f140669",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
