const bloggerController = require('../controllers/bloggerController');
const express = require('express');
const mongoose = require('mongoose');


const bloggerRouter = express.Router();

bloggerRouter.post('/',
bloggerController.createBlogger,
  (req, res) => {
    res.status(200).json(res.locals.newBlogger);
    console.log('response: ', res.locals.newBlogger);
  }
);

// bloggerRouter.get('/all',
//   bloggerController.getAllBloggers,
//   (req, res) => {
//     res.status(200).json(res.locals.bloggers);
//   }
// );

bloggerRouter.get('/:id',
  bloggerController.findBlogger,
  (req, res) => {
    console.log('result: ', res.locals.foundBlogger)
      res.status(200).json(res.locals.foundBlogger);
    }
);


// router.put('/:id',
// bloggerController.updateBlogger,
//   (req, res) => res.status(200).json({})
// );

// router.delete('/:id',
// bloggerController.deleteBlogger,
//   (req, res) => res.status(200).json({})
// );


module.exports = bloggerRouter;