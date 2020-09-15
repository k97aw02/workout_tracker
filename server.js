const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");



// initialize Express as App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// use Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// set db to mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Create Routes
app.use(require("./routes/api_routes"));
app.use(require("./routes/html_routes"));

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log(`App listening on Port ${PORT}!`);
});