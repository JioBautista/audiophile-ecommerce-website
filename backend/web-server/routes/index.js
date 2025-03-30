const express = require("express");
const cors = require("cors");
const router = express.Router();

router.get("/", cors(), (req, res) => {
  res.send("This is the index route");
});

module.exports = router;
