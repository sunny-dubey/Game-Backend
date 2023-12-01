const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'Please enter the game name'],
    unique: true,
  },
  Url: {
    type: String,
    required: [true, 'Please enter the url of the game'],
    //match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Please enter a valid URL'],
    unique: true,
  },
  Author: {
    type: String,
    required: [true, 'Please enter the author of the game'],
  },
  Published_Date: {
    type: Date,
    default: Date.now(),
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
