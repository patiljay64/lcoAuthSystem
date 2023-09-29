const mongoose = require("mongoose");

const guestUserSchema = new mongoose.Schema({
    UUID: {
        type: String,
        require: true,
        default: null
    },
    name: {
        type: String,
        require: true,
        default: null
    },
    gameInfo: {
        playedWithID: String,
        date: Date,
        status: String,
        ponits: Number
    },
    gamesPlayed: {
        totalGamesPlayed: {
            type: Number,
            default: 0
        },
        totalWins: {
            type: Number,
            default: 0
        },
        totalLost: {
            type: Number,
            default: 0
        },
        totalPoints: {
            type: Number,
            default: 0
        },
        rank: {
            type: Number,
            default: null
        },
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model("guestuser", guestUserSchema);