import * as admin from "firebase-admin";
import app from "../../utils/firestore";

export default async (req, res) => {
  const { id, name, isInRoom } = req.body;

  if (!id || !name) res.status(400).json();
  const roomRef = app.firestore().collection("rooms").doc(req.body.id);

  try {
    await roomRef.update({
      users: admin.firestore.FieldValue.arrayUnion({name, isInRoom }),
    });
    res.status(200).json();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
