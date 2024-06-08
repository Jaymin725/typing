const express = require("express");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const passportConfig = require("./config/passport");
const Blog = require("./models/Blog");

const app = express();

app.set("view engine", "ejs");

// Connect to MongoDB

// Middleware
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "hello world",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());
app.use(passport.authenticate("session"));

// Passport config
passportConfig(passport);

app.use((req, res, next) => {
  console.log(req.user);
  next();
});
// Routes
app.use("/", authRoutes);
app.use("/profile", profileRoutes);

// Default route
app.get("/", async (req, res) => {
  res.render("index", { user: req.user, blogs: await Blog.find({}) });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
