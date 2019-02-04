var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./routes/api-routes");
app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:Password1:<dbpassword>@ds163254.mlab.com:63254/heroku_2l84sfr5";

mongoose.connect(MONGODB_URI);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

