const express = require('express')
const router = express.Router()

router.post("/google", async (req, res, next) => {
  const ticket = await gClient.verifyIdToken({
    idToken: req.body.token,
    audience: config.GC_ID,
  });
  console.log(ticket);
  if (ticket.payload.aud == config.GC_ID) {
    return res.json({ token: ticket.envelope.kid });
  }
  return res.status(401).send("not authenrificated");
});

module.exports = router