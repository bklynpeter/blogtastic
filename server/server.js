// dependencies
const path = require('path');
const express = require('express');
const bloggerRouter = require('./routes/bloggerRouter');
// const blogpostRouter = require('./routes/blogpostRouter');
const connectDB = require('./connect');
// const mongoose = require('mongoose');

// connection
const app = express();
const PORT = 3000;
const MONGO_URI =
    'mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/blogtastic?retryWrites=true&w=majority';


//handle parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')));


// route handlers
app.use('/blogger', bloggerRouter);
// app.use('/blogpost', blogpostRouter);

// for unknown
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


// express error handler //
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// start database and then server
const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT || 3000}...`);
    });
  } catch (error) {
      console.log(error, 'Failed to connect to the database, server is not running.');
  }
};
start();

module.exports = app;
