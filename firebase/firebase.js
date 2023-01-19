// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCknYUBSXUD-9h-7bjrcnGiYIrpWye_BCs",
  authDomain: "privilegewalk-85615.firebaseapp.com",
  projectId: "privilegewalk-85615",
  storageBucket: "privilegewalk-85615.appspot.com",
  messagingSenderId: "950417977114",
  appId: "1:950417977114:web:cbe2a458b897a4ef4206a3",
  measurementId: "G-5K8DMH4E6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

