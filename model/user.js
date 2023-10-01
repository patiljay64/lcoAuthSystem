const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        default: null
    },
    token: {
        type: String
    },
});

module.exports = mongoose.model("user", userSchema);


// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         require: true,
//     },
//     lastname: {
//         type: String,
//         require: true,
//     },
//     email: {
//         type: String,
//         require: true,
//         unique: [true, "email must be required and must be fresh"]
//     },
//     password: {
//         type: String,
//         require: true
//     },
//     UUID: {
//         type: String,
//         require: true,
//         default: null
//     },
//     gameInfo: {
//         playedWithID: String,
//         date: Date,
//         status: String,
//         ponits: Number
//     },
//     gamesPlayed: {
//         totalGamesPlayed: {
//             type: Number,
//             default: 0
//         },
//         totalWins: {
//             type: Number,
//             default: 0
//         },
//         totalLost: {
//             type: Number,
//             default: 0
//         },
//         totalPoints: {
//             type: Number,
//             default: 0
//         },
//         rank: {
//             type: Number,
//             default: null
//         },
//     },
//     token: {
//         type: String
//     },

// });

// module.exports = mongoose.model("user", userSchema);