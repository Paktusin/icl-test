const express = require("express");
const router = express.Router();
const { User } = require("../schemas/User");

router.use(require("../middleware/auth"));

router.get("/user/:id?", async (req, res) => {
  const user = await User.findOne({ id: req.params.id ?? req.userId });
  return res.json(user.toObject());
});

router.use("/post", require("./post"));

module.exports = router;
