const express = require("express");
const passport = require("passport");
const { userSignUp } = require("../controllers/user");

const router = express.Router();

router
  .route("/signup")
  .get((req, res) => res.render("signup"))
  .post(userSignUp);

router
  .route("/login")
  .get((req, res) => res.render("login"))
  .post(
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
