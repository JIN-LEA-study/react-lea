const mongoose = require("mongoose");
const { Schema } = mongoose;

// const postSchema = new mongoose.Schema(
//   {
//     title: String,
//     content: Stirng,
//   },
//   { Colletion: "posts" }
// );

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { Collections: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
