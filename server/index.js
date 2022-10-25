const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./db");
const User = require("./schemas/User");
const config = require("dotenv").config().parsed;
const { OAuth2Client } = require("google-auth-library");
const gClient = new OAuth2Client(config.GC_ID);
const app = express();
const port = config.PORT || 3000;

connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./middleware/cors'));
app.use("/private", require('./routes/private'));
app.use("/login", require('./routes/login'));


app.use((err, req, res, next) => {
  console.error(err.stack);
  console.log(res.statusCode);
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
