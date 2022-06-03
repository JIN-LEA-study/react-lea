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
    title: String, // String is shorthand for {type: String}
    content: String,
    postNum: Number,
  },
  { Collections: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
