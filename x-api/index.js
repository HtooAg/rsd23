const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient("mongodb://127.0.0.1");

const xdb = mongo.db("x");
const xposts = xdb.collection("posts");
const xusers = xdb.collection("users");

app.get("/posts", async function (req, res) {
  try {
    const data = await xposts
      .aggregate([
        {
          $lookup: {
            localField: "owner",
            from: "users",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $limit: 20,
        },
      ])
      .toArray();
    const format = data.map(post => {
      post.user = post.user[0];
      delete post.user.password;
      return post;
    });
    return res.json(format);
  } catch (err) {
    return res.sendStatus(500);
  }
});

app.get("/users/:handle", async function (req, res) {
  const { handle } = req.params;
  try {
    const user = await xusers.findOne({ handle });
    const data = await xposts
      .aggregate([
        {
          $match: { owner: user._id },
        },
        {
          $lookup: {
            localField: "owner",
            from: "users",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $limit: 20,
        },
      ])
      .toArray();
    const format = data.map(post => {
      post.user = post.user[0];
      delete post.user.password;
      return post;
    });
    return res.json(format);
  } catch (err) {
    return res.sendStatus(500);
  }
});
app.listen(8888, () => {
  console.log("X api running at 8888");
});
