const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const gameRouter = require('./routes/gameRoutes');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('home page');
});

app.use('/api/v1/users', gameRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
