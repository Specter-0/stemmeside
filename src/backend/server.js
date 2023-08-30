const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('valg-system-firebase-adminsdk-hm07n-a759616b9c.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://valg-system.firebaseio.com'
});

const firestore = admin.firestore();

const app = express();
app.use(bodyParser.json());

// Define your API endpoints
app.post('/vote', async (req, res) => {
  const { person, kode } = req.body;

  try {
    // Check if person exists
    const personRef = firestore.collection('Stemmene').doc(person);
    const personDoc = await personRef.get();
    if (!personDoc.exists) {
      return res.status(400).send('Person does not exist.');
    }

    // Check if kode exists
    const kodeRef = firestore.collection('Koder').doc(kode);
    const kodeDoc = await kodeRef.get();
    if (!kodeDoc.exists) {
      return res.status(400).send('Kode does not exist.');
    }

    // Perform the vote update
    const stemmer = personDoc.data().stemmer;
    await firestore.runTransaction(async transaction => {
      await transaction.delete(kodeRef);
      await transaction.update(personRef, { stemmer: stemmer + 1 });
    });

    return res.status(200).send('Vote successful.');
  } catch (error) {
    console.error(error);
    return res.status(500).send('An error occurred.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
