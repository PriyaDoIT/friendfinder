var express = require("express");
var app = express();
var PORT = 3000;
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



