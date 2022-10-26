const cors = require("cors");
const corsOptions = {
    origin: [
      "capacitor://localhost",
      "ionic://localhost",
      "http://localhost",
      "http://localhost:8080",
      "http://localhost:8100",
      "https://paktusin.github.io",
    ],
    optionsSuccessStatus: 200,
  };

module.exports = cors(corsOptions);