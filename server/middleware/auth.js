async function auth(req, res, next) {
  return res.status(401).send();
}


module.exports = auth;
