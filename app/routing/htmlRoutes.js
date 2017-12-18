// Dependencies
// =============================================================
var path = require("path");

module.exports = function (app) {
    //display home page
    app.use(function (req, res) {
        console.log(path.join(__dirname, "/../public/home.html"));
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })
    //display survey page
    app.get("/survey", function (req, res) {
        console.log(path.join(__dirname, "/../public/survey.html"));
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
}


