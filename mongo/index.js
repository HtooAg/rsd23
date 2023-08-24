const { MongoClient, ObjectID } = require("mongodb");
const mongo = new MongoClient("mongodb://127.0.0.1");
const db = mongo.db("todo");

async function read() {
  const data = await db.collection("tasks").findOne();
  console.log(data);
}
// read();

async function insert(doc) {
  const result = await db.collection("tasks").insertOne(doc);
  console.log(result);
}
// insert({ subject: "Butter", done: false });
// insert({ subject: "Mango", done: true });

async function updateOne(subject, done) {
  const result = await db.collection("tasks").updateOne(
    { subject },
    {
      $set: { done },
    }
  );
  console.log(result);
}
// updateOne("Butter", true);

async function remove(subject) {
  const result = await db.collection("tasks").deleteOne({ subject });
  console.log(result);
  process.exit(0);
}
remove("Butter");
