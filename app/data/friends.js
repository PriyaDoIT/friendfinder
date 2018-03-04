// ===============================================================================
// DATA
// Below data will hold all of the friends
// Initially we just set it equal to a "dummy" friendsArray.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Jean-Ralphio Saperstein",
        photo: "https://thegameofnerds.files.wordpress.com/2017/11/20171103_161422.jpg?w=730",
        scores: [
            "5",
            "2",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]

    },
    {
        name: "Tom Haverford",
        photo: "https://1.bp.blogspot.com/-clS85qwX9oM/Vzsomrg1-VI/AAAAAAAAdLs/WKGcaHtCoRIVRLclqI8kFcAHK8crNj0fACKgB/s1600/635926603300435459-1921418490_imrs.jpeg",
        scores: [
            "4",
            "4",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        name: "April Ludgate",
        photo: "https://vignette.wikia.nocookie.net/characters/images/6/6f/April_Ludgate.JPG/revision/latest?cb=20170707011218",
        scores: [
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4"
        ]
    }
]
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;


