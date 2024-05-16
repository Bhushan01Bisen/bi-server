var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/query-test", function (req, res, next) {
  const { name, loc } = req.query;
  res.send(`The game name is ${name} , and i want crak intview in ${loc}`);
});
router.get("/path-test/:n/:l", function (req, res, next) {
  const { n, l } = req.params;
  res.send(`The game name is ${n} , and i want crak interview in ${l}`);
});
router.put("/header-test", function (req, res, next) {
  const { n, l } = req.headers;
  res.send(`The game name is ${n} , and i am craking the interview in ${l}`);
});
router.post("/body-test", function (req, res, next) {
  const { name, location } = req.body;
  res.send(`The game name is ${name} , and i am craking the interview in ${location}`);
});

module.exports = router;
