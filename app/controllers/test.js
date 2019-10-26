const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.render("test/index");
});

router.get("/info", function(req, res) {
    res.send("Test!");
});

module.exports = router;
