const express = require("express");
const router = express.Router();
const { Post } = require("../schemas/Post");

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  return res.json(post.toObject());
});

router.get("/", async (req, res) => {
  const { limit = 10, skip = 0, userId } = req.query;
  const posts = await Post.find({ "from.id": userId ?? /.*/ })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  return res.json(
    posts.map((post) => {
      return {
        ...post.toObject(),
        text: post.text.slice(0, 100),
        createdAt: post.createdAt,
      };
    })
  );
});

router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  return res.json(post.toObject());
});

router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (req.userId === post.from.id) {
    await post.delete();
    return res.send();
  } else {
    return res.status(403).json({ message: "its not your post!" });
  }
});

router.post("/comment", async (req, res) => {
  const post = await Post.create(req.body);
  return res.json(post);
});

module.exports = router;
