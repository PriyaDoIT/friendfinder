// ===============================================================================
// DATA
// Below data will hold all of the friends
// Initially we just set it equal to a "dummy" friendsArray.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        routeName: "taylorswift",
        name:"Taylor Swift",
        photo:"https://pixel.nymag.com/imgs/daily/vulture/2017/11/09/09-taylor-swift-ranking-feature.nocrop.w1600.h2147483647.jpg",
        scores:[   
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1]

    }
]
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  