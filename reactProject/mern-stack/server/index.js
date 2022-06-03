const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// mongodb+srv://leaisrevolution:gpdnjsdl27@cluster0.v7mku.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
const { Post } = require("./Model/Post.js");

// 서버 실행
app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://leaisrevolution:gpdnjsdl27@cluster0.v7mku.mongodb.net/Cummunity?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("connection MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  console.log(temp);
  const CommunityPost = new Post(temp);
  CommunityPost.save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// app.get("/express", (req, res) => {
//   res.send("Hello Express");
// });
