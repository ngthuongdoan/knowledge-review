const express = require("express");

const router = express.Router();
const todos = [
  {
    id: 1,
    content: "Welcome to the world",
    date: new Date(),
    isDone: false,
  },
  {
    id: 2,
    content: "Welcome to the world, again",
    date: new Date(),
    isDone: false,
  },
];

const tryAsync = () =>
  setTimeout(() => {
    console.log("TimeOut");
  }, 5000);
router.route("/").get((req, res) => {
  res.status(200).send(todos);
});

module.exports = router;
