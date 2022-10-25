const express = require("express");
const { verifyGoogleToken } = require("../middleware/auth");
const router = express.Router();
const { User } = require("../schemas/User");

router.use(require("../middleware/auth"));

router.get("/user", verifyGoogleToken, async (req, res, next) => {
  return next();
});

router.get("/user/:id?", async (req, res) => {
  const id = req.params.id ?? req.userId;
  const user = await User.findOne({ id });
  return res.json(user.toObject());
});

router.use("/post", require("./post"));

module.exports = router;
