import * as admin from "firebase-admin";

// Secure a connection to FIREBASE from the backend
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

export default async (req, res) => {
  const id = Math.random().toString(36).slice(-6);

  console.log(id);

  const test = await app.firestore().collection('rooms').doc(id).set({'test': 'test'});

  res.status(200).json({ id });
};
