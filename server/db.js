const { ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

async function connect() {
  try {
    const connection = await mongoose.connect(require('./config').MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    console.log(`MongoDB connected to host ${connection.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connect;
