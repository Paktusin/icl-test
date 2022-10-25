const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.decode(token);
    req.userId = decoded?.sub;
    if (req.userId && decoded.aud === require("../config").GC_ID) {
      console.log(`authentificated ${req.userId}`);
      return next();
    }
  }
  return res.status(401).send();
}

module.exports = auth;
