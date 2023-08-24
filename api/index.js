const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  const subject = req.body;
  if (!subject) return res.status(404).json({ msg: "subject required" });
  return res.status(201).json(subject);
});

app.get("/users", (req, res) => {
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Marley" },
  ];
  res.json(data);
});
app.listen(8888, () => {
  console.log("Api server is running at 8888");
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id });
});
