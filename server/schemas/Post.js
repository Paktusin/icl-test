const mongoose = require("mongoose");
const { UserSchema } = require("./User");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, maxLength: 50, required: true },
    text: { type: String, required: true },
    type: { type: String, required: true },
    region: { type: String, required: true },
    img: String,
    from: UserSchema,
  },
  { timestamps: true }
);

module.exports.PostSchema = PostSchema;
module.exports.Post = mongoose.model("post", PostSchema);
