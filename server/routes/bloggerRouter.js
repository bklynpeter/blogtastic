const bloggerController = require('../controllers/bloggerController');
const express = require('express');
const mongoose = require('mongoose');


const bloggerRouter = express.Router();

bloggerRouter.post('/',
  bloggerController.createBlogger,
  (req, res) => {
    // console.log(res.body || 'whoops!')
    res.status(200).json(res.locals.newBlogger);
  }
);



bloggerRouter.get('/:id',
  bloggerController.findBlogger,
  (req, res) => {
      res.status(200).json(res.locals.foundBlogger);
    }
);

// router.get('/',
// bloggerController.getAllBloggers,
//   (req, res) => {
//     res.status(200).json(res.locals.bloggers);
//   }
// );

// router.put('/:id',
// bloggerController.updateBlogger,
//   (req, res) => res.status(200).json({})
// );

// router.delete('/:id',
// bloggerController.deleteBlogger,
//   (req, res) => res.status(200).json({})
// );


module.exports = bloggerRouter;