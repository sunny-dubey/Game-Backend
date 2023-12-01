const Game = require('./../models/gameModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllGames = catchAsync(async (req, res, next) => {
  const games = await Game.find();
  if (games.length == 0) {
    return next(new AppError('No Game in the database!', 400));
  }

  res.status(200).json({
    status: 'successfully fetched all games',
    results: games.length,
    data: {
      games,
    },
  });
});

exports.createGame = catchAsync(async (req, res, next) => {
  const { Name, Url, Author } = req.body;
  console.log('check');
  if (!Name || !Url || !Author) {
    return next(
      new AppError(
        'Please provide values for Name, Url, Author, and Published_Date!',
        400
      )
    );
  }
  const newGame = await Game.create({
    Name,
    Url,
    Author,
  });

  res.status(201).json({
    status: 'successfully created new game',
    data: {
      game: newGame,
    },
  });
});

exports.getGame = catchAsync(async (req, res, next) => {
  const gameId = req.params.id;
  const game = await Game.findById(gameId);

  if (!game) {
    return next(new AppError('Game not found', 404));
  }

  res.status(200).json({
    status: 'successfully fetched the game',
    data: {
      game,
    },
  });
});

exports.updateGame = catchAsync(async (req, res, next) => {
  const gameId = req.params.id;
  const updatedGame = await Game.findByIdAndUpdate(gameId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedGame) {
    return next(new AppError('Game not found', 404));
  }
  updatedGame.Published_Date = new Date();
  await updatedGame.save();

  res.status(200).json({
    status: 'successfully updated the game',
    data: {
      game: updatedGame,
    },
  });
});

exports.deleteGame = catchAsync(async (req, res, next) => {
  const gameId = req.params.id;
  const deletedGame = await Game.findByIdAndDelete(gameId);

  if (!deletedGame) {
    return next(new AppError('Game not found', 404));
  }

  res.status(204).json({
    status: 'successfully deleted the game',
    data: null,
  });
});
