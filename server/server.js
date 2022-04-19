// dependencies
const path = require('path');
const express = require('express');
const bloggerRouter = require('./routes/bloggerRouter');
const blogpostRouter = require('./routes/blogpostRouter');

// connection
const app = express();
const PORT = 3000;

//handle parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')));


// route handlers
app.use('/blogger', bloggerRouter);
app.use('/blogpost', blogpostRouter);

// catch-all route handler for any requests to an unknown route
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

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT || 3000}...`);
});

module.exports = app;
