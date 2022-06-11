let express = require("express");
let router = express.Router();
const multer = require("multer");

const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User");

router.post("/register", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" }).then((doc) => {
    temp.userNum = doc.userNum;
    const userData = new User(req.body);
    userData
      .save()
      .then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ success: false });
      });
  });
  console.log(req.body);
});

router.post("/namecheck", (req, res) => {
  User.findOneAndDelete({ displayName: req.body.displayName })
    .exec()
    .then((doc) => {
      let check = true;
      if (doc) {
        check = false;
      }
      res.status(200).json({ success: true, check });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
