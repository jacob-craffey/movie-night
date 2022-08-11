import app from "../../utils/firestore";

export default async (req, res) => {
  const id = Math.random().toString(36).slice(-6);

  const newRoom = {
    created: Date.now(),
  };

  try {
    await app.firestore().collection("rooms").doc(id).set(newRoom);
    res.status(200).json({ id });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
