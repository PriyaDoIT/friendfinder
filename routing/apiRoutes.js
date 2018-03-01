//load data by linking to data sources

var friendsData = require("../app/data/friends.js");
var differencesData = require("../app/data/differences.js");

module.exports = function (app){

    //api get request to view all the friends entered in JSON format
    app.get("/api/friends", function(req,res){
        res.json(friendsData)
    });
//api get request to view the difference between current user and friends 'database' (in this case it is an array)
    app.get("/api/differences", function(req,res){
        res.json(differencesData)
    });

    //POST requests based on user input from form

    //create new friend
    // create an object that holds user input
    app.post("/api/friends", function (req,res){
        var newFriend = req.body;
         newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

         console.log(newFriend);
    //push this object to the friendsArray via friendsData
         friendsData.push(newFriend);

         res.json(newFriend);



    })

}




//take the total score of "new" friend created and loop through friends array, 
// finding the abs value of the differences, push each to a differences array

//find the position of the lowest number in the differenes array

//take that position and search the friends array

//display match in modal

//clear entries 