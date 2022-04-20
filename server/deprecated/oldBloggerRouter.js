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

bloggerRouter.get('/all',
  bloggerController.findAllBloggers,
  (req, res) => {
    res.status(200).json(res.locals.allBloggers);
  }
);

bloggerRouter.get('/:id',
  bloggerController.findBlogger,
  (req, res) => {
    console.log('result: ', res.locals.foundBlogger)
      res.status(200).json(res.locals.foundBlogger);
    }
);

bloggerRouter.put('/:id',
  bloggerController.updateBlogger,
  (req, res) => {
    console.log('result: ', res.locals.updatedBlogger)
      res.status(200).json(res.locals.updatedBlogger);
    }
);

bloggerRouter.delete('/:id',
  bloggerController.updateBlogger,
  (req, res) => {
    console.log('deleted: ', res.locals.deletedBlogger)
      res.status(200).json(res.locals.deletedBlogger);
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