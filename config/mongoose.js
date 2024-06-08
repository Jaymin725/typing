const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jaymin:mongo123@cluster0.pbv1wji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = mongoose;
