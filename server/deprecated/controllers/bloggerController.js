const { Blogger, Blogpost } = require('../../models/blogModels');
const mongoose = require('mongoose');

const bloggerController = {

    createBlogger : (req, res, next) => {
        const { content, priority, complete } = req.body
        if(!content || !priority || !complete){
            return next({
                log: 'There\'s an error in createBlogger',
                status: 500,
                message: {err: `Missing info to create new blogger: Content: ${content}, Priority: ${priority}, Complete: ${complete}`}
            });
        } 
        const newBlogger = { content, priority, complete }
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

    findAllBloggers: (req, res, next) => {
        // console.log(req.params.id)
        Blogger.find({}, (err, foundBloggers) => {
            if(err){
                return next({
                log: 'There\'s an error in findAllBloggers',
                status: 500,
                message: {err: 'Missing or incorrect info to find all bloggers.'}
                })
            } else {
                res.locals.allBloggers = foundBloggers;
                console.log('res.locals.foundBlogger', res.locals.allBloggers)
            }
            next();
        });
    },

    updateBlogger: (req, res, next) => {
        console.log('update blogger')
        const { content, priority, complete } = req.body
        const update = {content, priority, complete}
        Blogger.findOneAndUpdate(req.params.id, update, (err, updatedBlogger) => {
            if(err){
                return next({
                log: 'There\'s an error in updateBlogger',
                status: 500,
                message: {err: 'Missing or incorrect info to update blogger.'}
                })
            } else {
                res.locals.updatedBlogger = updatedBlogger;
                console.log('res.locals.foundBlogger', res.locals.updatedBlogger)
            }
            next();
        });
    },

    deleteBlogger: (req, res, next) => {
        console.log('delete blogger')
        Blogger.deleteOne(req.params.id, (err, deletedBlogger) => {
            if(err){
                return next({
                log: 'There\'s an error in deleteBlogger',
                status: 500,
                message: {err: 'Missing or incorrect info to update blogger.'}
                })
            } else if(!deletedBlogger) {
                return next({
                    log: 'There\'s an error in deleteBlogger',
                    status: 500,
                    message: {err: 'ID not found; cannot delete blogger.'}
                    })
            } else {
                res.locals.deletedBlogger = deletedBlogger;
                console.log('res.locals.foundBlogger', res.locals.deletedBlogger)
            }
            next();
        });
    },
};

module.exports = bloggerController;
