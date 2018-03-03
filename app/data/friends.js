// ===============================================================================
// DATA
// Below data will hold all of the friends
// Initially we just set it equal to a "dummy" friendsArray.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Mike Smith",
        photo: "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
        scores: [
            "5",
            "2"
            // "4",
            // "4",
            // "5",
            // "1",
            // "2",
            // "5",
            // "4",
            // "1"
        ]

    },
    {
    name: "Sarah Dru",
    photo: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
    scores: [
        "4",
        "4"
        // "5",
        // "5",
        // "5",
        // "5",
        // "5",
        // "5",
        // "5",
        // "5"
    ]
    }
    // {
    // name: "Michael Scott",
    // photo: "https://images.pexels.com/photos/415326/pexels-photo-415326.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
    // scores: [
    //     "4",
    //     "4",
    //     "4",
    //     "4",
    //     "4",
    //     "4",
    //     "4",
    //     "4",
    //     "4",
    //     "4"]
    // }
]
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;


