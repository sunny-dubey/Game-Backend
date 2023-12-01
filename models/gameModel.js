const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the game name'],
  },
  url: {
    type: String,
    required: [true, 'Please enter the url of the game'],
    match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Please enter a valid URL'],
  },
  author: {
    type: String,
    required: [true, 'Please enter the author of the game'],
  },
  published_Date: {
    type: Date,
    default: Date.now(),
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
