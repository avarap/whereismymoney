const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "All good in here"});
});

module.exports = router;
