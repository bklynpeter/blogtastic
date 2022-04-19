const { Blogger, Blogpost } = require('../models/blogModels');
const mongoose = require('mongoose');

const bloggerController = {

    createBlogger : (req, res, next) => {
        const { firstName, lastName, bio } = req.body
        if(!firstName || !lastName || !bio){
            return next({
                log: 'There\'s an error in createBlogger',
                status: 500,
                message: {err: `Missing info to create new blogger: First Name: ${firstName}, Last Name: ${lastName}, Bio: ${bio}`}
            });
        } 
        const newBlogger = { firstName, lastName, bio }
        
        Blogger.create(newBlogger, (err, newBlogger) => {
            if(err){
                return next('Error in createBlogger: ', err)
            } else {
                console.log('final: ', res.locals.newBlogger)
            }
        }) 
        res.locals.newBlogger = newBlogger;
    
        next();
    },

    findBlogger: (req, res, next) => {
        console.log(req.params.id)
        Blogger.findById(req.params.id, (err, foundBlogger) => {
            if(err){
                return next({
                log: 'There\'s an error in findBlogger',
                status: 500,
                message: {err: 'Missing or incorrect info to find blogger.'}
                })
            } else {
                res.locals.foundBlogger = foundBlogger;
                console.log('res.locals.foundBlogger', res.locals.foundBlogger)
            }
            next();
        });
    },

   
};

module.exports = bloggerController;
