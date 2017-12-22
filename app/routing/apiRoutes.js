var friendData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friendData);
    })

    app.post("/api/friends",function(req,res){
        //need to review again
        var bestMatch = {
            name: "",
            photo:"",
            friendDifference: 1000
        }
        //log the user(request) information
        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;
        //log the user's scores
        console.log(userScores);

        var totalDifference = 0;

        for(var i=0;i<friendData.length;i++){
            console.log(friendData[i]);
            totalDifference=0;

            for(var j=0;j<friendData[i].scores[j];j++){
                totalDifference = Math.abs(parseInt(friendData[i].scores[j])-parseInt(userScores[j]));

                if(totalDifference<=bestMatch.friendDifference){
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }      
            }    
        }
        friendData.push(userData);
        //return best match result in json format back to user (response)
        res.json(bestMatch);
    })
}