const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const audience = require("../config").GC_ID;
const gClient = new OAuth2Client(audience);

async function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.decode(token);
    req.userId = decoded?.sub;
    if (req.userId && decoded.aud === require("../config").GC_ID) {
      return next();
    }
  }
  return res.status(401).send();
}

async function verifyGoogleToken(req, res, next) {
  const token = req.body.token ?? req.headers.authorization?.split(" ")[1];
  try {
    const ticket = await gClient.verifyIdToken({
      idToken: token,
      audience: audience,
    });
    req.ticket = ticket;
    if (ticket.payload.aud !== audience) {
      return res.status(401).send("not authenrificated");
    }
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: err.message });
  }
  return next();
}

module.exports = auth;
module.exports.verifyGoogleToken = verifyGoogleToken;
