import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import { Coiny } from "next/font/google";


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


export async function validate_code(kode) {
  const koderRef = collection(firestore, "Koder");
  const kodeRef = doc(koderRef, kode);
  const kodeDoc = await getDoc(kodeRef);
  
  return kodeDoc.exists() 
}


export async function vote(person, kode) {
  const stemmeneRef = collection(firestore, "Stemmene");
  const koderRef = collection(firestore, "Koder");


  // check if person is real
  const personRef = doc(stemmeneRef, person);
  const personDoc = await getDoc(personRef);

  if (!personDoc.exists()) {
    return "Person finnes ikke";
  }

  const kodeRef = doc(koderRef, kode);
  const kodeDoc = await getDoc(kodeRef);

  if (!kodeDoc.exists()) {
    return "Koden finnes ikke";
  }

  // slett kode
  try {
    await deleteDoc(kodeRef);
  }
  catch(error) {
    return error;
  }

  const stemmer = personDoc.data().stemmer;
  console.log("stemmer: %d", stemmer);

  // add vote
  try {
    await updateDoc(personRef, {
      "stemmer": stemmer + 1
    })

  }
  catch(error) {
    console.log(error);
  }

  return 1;
}


export async function getPeople() {
  const stemmeneRef = collection(firestore, "Stemmene");
  const snapshot = await getDocs(stemmeneRef);
  const people = snapshot.docs.map(doc => doc.id);
  return people;
}

