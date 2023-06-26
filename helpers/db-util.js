import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const url =
    "mongodb+srv://admin:Admin123@atlascluster.onkjdyo.mongodb.net/events?retryWrites=true&w=majority";
  const client = await MongoClient.connect(url);
  return client;
}

export async function insertDocument(client, collectionName, document) {
  const db = client.db();
  await db.collection(collectionName).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
