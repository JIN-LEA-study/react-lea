const mongoose = require("mongoose");
const { Schema } = mongoose;

const repleSchema = new mongoose.Schema(
  {
    reple: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { Collections: "reples" }
);

const Reple = mongoose.model("Reple", postSchema);

module.exports = { Reple };
