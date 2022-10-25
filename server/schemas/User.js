const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  picture: String,
});

module.exports.UserSchema = UserSchema;
module.exports.User = mongoose.model("user", UserSchema);
