import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA070D47iz2TR0aaSxJ-LqI96O79raJPjU",
  authDomain: "proyectofinalreact-b92cf.firebaseapp.com",
  projectId: "proyectofinalreact-b92cf",
  storageBucket: "proyectofinalreact-b92cf.appspot.com",
  messagingSenderId: "661003449088",
  appId: "1:661003449088:web:73d35280bffedea30db9e5",
  measurementId: "G-GY6R2QPQZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db  = getFirestore(app);