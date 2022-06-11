const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    userNum: Number,
    email: String,
    displayName: String,
    uid: String,
  },
  { Collections: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
