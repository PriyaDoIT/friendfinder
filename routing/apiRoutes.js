//load data by linking to data sources

var friendsData = require("../app/data/friends.js");

module.exports = function (app) {

    //api get request to view all the friends entered in JSON format
    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    });
    //api get request to view the difference between current user and friends 'database' (in this case it is an array)
    app.get("/api/differences", function (req, res) {
        res.json(differencesData)
    });

    //POST requests based on user input from form
    app.post("/api/friends", function (req, res) {
        //array of scores for new friend
        var newFriend = req.body
        var newFScore = req.body.scores;
        var diffArray = []
        var findLowestArray = [];

        

        for (var f = 0; f < friendsData.length; f++) {
            var subArray = [];
            for (var s = 0; s < friendsData[f].scores.length; s++) {
                for (var n = 0; n < newFScore[n].length; n++) {
                    subArray.push(parseInt(friendsData[f].scores[s]) - parseInt(newFScore[n]));

                    
                }
            }
            diffArray.push(subArray);
            
        }
        console.log(diffArray)
        // console.log(friendsData[0].scores.length)
        // console.log(newFriend)
        // console.log(parseInt(newFriend.scores[0]) === 4);
        // console.log(parseInt(friendsData[0].scores[0]) == 5)
        //push this object to the friendsArray via friendsData
        friendsData.push(newFriend);

        res.json(newFriend);


        // for(var i=0; i<friendsData.length -1 ;i++){
        //     var diffArray =[];

        //     for (var x=0; x < newFriend.scores[x]; x++)

        // }
    });
// console.log(friendsData[0].scores.length)
// 1. Take newFriend.scores[x] and compare for each friendArray.scores[y]; subtract the two values
//         a. parseInt because when .val it saves to an array as a string
//         b. sum all items in each array in diffArray and take the absolute value
//         c. find the position of the lowest number in the diffArray, store into a variable
//         d. take this position of the lowest number and use it to reference the correct position in the friendsArray

// 2. display photo and name of the match
}