const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const { UserSchema } = require("./User");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    img: String,
    from: UserSchema,
  },
  { timestamps: true }
);

module.exports.PostSchema = PostSchema;
module.exports.Post = mongoose.model("post", PostSchema);
