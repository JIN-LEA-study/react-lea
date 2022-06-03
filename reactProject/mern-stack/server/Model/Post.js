const { default: mongoose } = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
});

const kitten = mongoose.model("ketten", kittySchema);
