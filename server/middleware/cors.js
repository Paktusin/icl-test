const cors = require("cors");
const corsOptions = {
    origin: [
      "http://localhost:8100",
      "https://paktusin.github.io",
    ],
    optionsSuccessStatus: 200,
  };

module.exports = cors();