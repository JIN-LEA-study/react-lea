const mongoose = require("mongoose");
const { Schema } = mongoose;

const counterSchema = new mongoose.Schema(
  {
    name: String, // String is shorthand for {type: String}
    postNum: Number,
    userNum: Number,
  },
  { Collections: "counters" }
);

const Counter = mongoose.model("Counter", counterSchema);

module.exports = { Counter };
