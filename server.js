// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//can access to other files, like css
app.use(express.static("./app/public"))

// Sets up the Express app to handle data parsing
//why change extended to true?
//what do the following bodyparser doing?
//only parses urlencoded bodies, extended true means the parsed body can be any type
//verses false can be only a string or array
app.use(bodyParser.urlencoded({ extended: true }));
//json format
app.use(bodyParser.json({type: "application/*+json"}));
//buffer
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
//string
app.use(bodyParser.text({type: "text/html"}));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: "+ PORT);
})

