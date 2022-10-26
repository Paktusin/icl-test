const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./db");
const fs = require("fs");
const path = require("path");
const https = require("https");
const port = require("./config").PORT || 3000;

connect();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/static", express.static("static"));
app.use(require("./middleware/cors"));
app.use("/private", require("./routes/private"));
app.use(require("./routes/login"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  console.log(res.statusCode);
  res.status(500).json({ message: err.message });
});

const options = {
  key: fs.readFileSync(path.resolve("./ssl.key")),
  cert: fs.readFileSync(path.resolve("./ssl.crt")),
};
https.createServer(options, app).listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
