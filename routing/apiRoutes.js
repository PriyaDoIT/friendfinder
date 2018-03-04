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
        var findLowest = [];

        //for each friend create a new array which holds the difference between scores
        for (var f = 0; f < friendsData.length; f++) {
            var diffArray = []
            //for each index in the friend array
            for (var s = 0; s < friendsData[f].scores.length; s++) {
                diffArray.push(Math.abs(parseInt(friendsData[f].scores[s]) - parseInt(newFriend.scores[s])));
            }
            //sum all items in each array and push to a consolidated array, findLowest Array
            findLowest.push(diffArray.reduce((accumulator, currentValue) => accumulator + currentValue));
        }

        //push newFriend to friendsArray
        friendsData.push(newFriend);
        //find position of the smallest number in the findLowest array, this position will be used to match friend
        var i = findLowest.indexOf(Math.min.apply(null, findLowest))

        //Match!
        var match = {
            name: friendsData[i].name,
            photo: friendsData[i].photo
        }
        console.log(match.photo)

    })
};
