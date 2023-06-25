import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(442).json({ message: "Invalid email address!" });
      return;
    }

    // store email to mongodb
    // Connection URL
    const url =
      "mongodb+srv://admin:Admin123@atlascluster.onkjdyo.mongodb.net/events?retryWrites=true&w=majority";
    const client = await MongoClient.connect(url);
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed Up!" });
  }
}

export default handler;
