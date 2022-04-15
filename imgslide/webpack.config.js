const path = require("path");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    fiilename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
};
