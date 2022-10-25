const express = require("express");
const router = express.Router();
const { Post } = require("../schemas/Post");

router.get("/", async (req, res) => {
  const { limit = 10, skip = 0 } = req.query;
  const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);  
  return res.json(
    posts.map((post) => ({
      ...post.toObject(),
      createdAt: post.createdAt,
    }))
  );
});

router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  return res.json(post);
});

router.delete("/:id", async (req, res) => {
  const post = await Post.deleteOne(req.params.id);
  return res.json(post);
});

router.post("/comment", async (req, res) => {
  const post = await Post.create(req.body);
  return res.json(post);
});


module.exports = router;
