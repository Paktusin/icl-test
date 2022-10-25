const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  picture: String,
});

module.exports = mongoose.model("user", UserSchema);
