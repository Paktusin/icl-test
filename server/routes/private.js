const express = require("express");
const router = express.Router();
const User = require("../schemas/User");

router.use(require("../middleware/auth"));

router.get("/user/:id?", async (req, res) => {
  const user = await User.findOne({ id: req.params.id ?? req.userId });
  return res.json(user.toObject());
});

module.exports = router;
