import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "valg-system.firebaseapp.com",
  projectId: "valg-system",
  storageBucket: "valg-system.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};


const app = initializeApp(firebaseConfig);
var firestore = getFirestore();


export default function Test() {
  console.log(firestore);
}

