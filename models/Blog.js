const mongoose = require("../config/mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    username: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
