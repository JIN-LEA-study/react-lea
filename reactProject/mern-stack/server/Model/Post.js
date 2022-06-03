const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: string,
    content: stirng,
  },
  { colletion: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
