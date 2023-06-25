// /comments/some-event-id

import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  // Connection URL
  const url =
    "mongodb+srv://admin:Admin123@atlascluster.onkjdyo.mongodb.net/events?retryWrites=true&w=majority";
  const client = await MongoClient.connect(url);

  // post comment
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(442).json({ message: "Invalid input!" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  // get comments by id
  if (req.method === "GET") {
    const DUMMY_COMMENTS = [
      { id: "c1", name: "Max", text: "First comment" },
      { id: "c2", name: "Manuel", text: "Second comment" },
    ];

    res.status(200).json({ comments: DUMMY_COMMENTS });
  }

  client.close();
}

export default handler;
