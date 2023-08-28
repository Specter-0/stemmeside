import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";


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


export default async function Test() {
  const stemmeneRef = collection(firestore, "Stemmene");

  const sigurdRef = doc(stemmeneRef, "Sigurd");
  const sigurd = await getDoc(sigurdRef);
  if (!sigurd.exists()) {
    console.log("Doesn't exist");
    return;
  }

  const data = sigurd.data();
  console.log(data);

}

