const express = require("express");
const User = require("../schemas/User");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const audience = require('../config').GC_ID;
const gClient = new OAuth2Client(audience);

router.post("/google", async (req, res, next) => {
  try {
    const ticket = await gClient.verifyIdToken({
      idToken: req.body.token,
      audience: audience,
    });
    console.log(ticket);
    if (ticket.payload.aud == audience) {
      const userObject = { ...ticket.payload, id: ticket.payload.sub };
      let user = await User.findOneAndUpdate({ id: userObject.id }, userObject);
      if (!user) {
        user = User.create(userObject);
      }
      return res.json({ token: req.body.token, ...user.toObject() });
    }
    return res.status(401).send("not authenrificated");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.nessage });
  }
});

module.exports = router;
