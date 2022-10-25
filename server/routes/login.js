const express = require("express");
const { verifyGoogleToken } = require("../middleware/auth");
const { User } = require("../schemas/User");
const router = express.Router();

router.post("/login/google", verifyGoogleToken, async (req, res, next) => {
  const token = req.body.token;
  const userObject = { ...req.ticket.payload, id: req.ticket.payload.sub };
  let user = await User.findOneAndUpdate({ id: userObject.id }, userObject);
  if (!user) {
    user = await User.create(userObject);
  }
  return res.json({ token, ...user.toObject() });
});

router.post("/logout", (req, res) => {});

module.exports = router;
