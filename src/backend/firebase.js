import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc, setDoc } from "firebase/firestore";


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


export async function Test() {
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

export async function vote(person, mail) {
  const stemmeneRef = collection(firestore, "Stemmene");
  const stemmereRef = collection(firestore, "Stemmere");

  const osloskolenEmailPattern = /^[a-z]{5}\d{3}@osloskolen\.no$/;
  if (!osloskolenEmailPattern.test(mail)) {
    console.log("Mailen er ikke en skole mail");
    return;
  }

  // check if mail has already voted
  const mailRef = doc(stemmereRef, mail);
  const mailDoc = await getDoc(mailRef);

  if (mailDoc.exists()) {
    console.log("Du har stemt allerede!");
    return
  }

  // check if person is real
  const personRef = doc(stemmeneRef, person);
  const personDoc = await getDoc(personRef);

  if (!personDoc.exists()) {
    console.log("Person finnes ikke");
    return;
  }


  const stemmer = personDoc.data().stemmer;
  console.log("stemmer: %d", stemmer);

  // add mail to voters
  try {
    await setDoc(mailRef, {});
  }
  catch(error) {
    console.log(error);
    return;
  }

  // add vote
  try {
    updateDoc(personRef, {
      "stemmer": stemmer + 1
    })

  }
  catch(error) {
    console.log(error);
  }

  console.log("her");
}


export async function getPeople() {
  const stemmeneRef = collection(firestore, "Stemmene");
  const snapshot = await getDocs(stemmeneRef);
  const people = snapshot.docs.map(doc => doc.id);
  return people;
}

