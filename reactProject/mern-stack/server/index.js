const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// mongodb+srv://leaisrevolution:gpdnjsdl27@cluster0.v7mku.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 경로
app.use("/api/post", require("./Router/post"));

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
