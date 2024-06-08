const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

router.use("/", (req, res, next) => {
  if (!req.user) res.redirect("/login");
  next();
});

router
  .route("/")
  .get(async (req, res) =>
    res.render("profile", {
      user: req.user,
      blogs: await Blog.find({ username: req.user.username }),
    })
  )
  .post((req, res) => {
    const blog = new Blog({
      title: req.body.title,
      text: req.body.text,
      username: req.user.username,
    });
    blog.save().then((result) => res.redirect("/profile"));
  });

module.exports = router;
