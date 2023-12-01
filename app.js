const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
//const userRouter = require('./routes/userRoutes');

const app = express();

// middleware
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.send('home page');
});

//app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
