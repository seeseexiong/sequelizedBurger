var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

//Routes
require("./")

// Import routes and give the server access to them.
var router = require("./controllers/controller");

app.use(router);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
