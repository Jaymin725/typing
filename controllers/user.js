const User = require("../models/User");

async function userSignUp(req, res) {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/signup");
  }
}

module.exports = { userSignUp };
