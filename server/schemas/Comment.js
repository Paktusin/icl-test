const mongoose = require("mongoose");
const { UserSchema } = require("./User");
const { PostSchema } = require("./Post");

const CommentSchema = new mongoose.Schema(
  {
    postId: [PostSchema.ObjectId],
    from: UserSchema,
  },
  { timestamps: true }
);

module.exports.Post = mongoose.model("comment", CommentSchema);
