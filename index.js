// dependencies
const path = require('path');
const express = require('express');
// const bloggerRouter = require('./routes/bloggerRouter');
const router = require('./server/routes/bloggerRouter');
// const blogpostRouter = require('./routes/blogpostRouter');
const connect = require('./server/connect');
const bodyParser = require('body-parser');

// connection
const app = express();
const PORT = 3000;



//handle parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')));


// route handlers
app.use('/blogger', router);
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
    await connect();
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT || 3000}...`);
    });
  } catch (error) {
      console.log(error, 'Failed to connect to the database, server is not running.');
  }
};
start();

module.exports = app;
