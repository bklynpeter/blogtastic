const express = require('express');
const { Blogger } = require('../models/blogModels');
const router = express.Router();

// new post
router.post('/', async(req, res) => {
  try {
    const newBlogger = await new Blogger(req.body).save();
    res.status(200).send(newBlogger)
  } catch (err) {
    res.status(500).send(err)
  }
})

//get all
router.get('/', async(req, res) => {
  try {
    const allBloggers = await Blogger.find();
    res.status(200).send(allBloggers)
  } catch (error) {
    res.status(500).send(error)
  }
})

//get by ID
router.get('/:id', async(req, res) => {
  try {
    const oneBlogger = await Blogger.findById(req.params.id);
    res.status(200).send(oneBlogger)
  } catch (error) {
    res.status(500).send(error)
  }
})

//update by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBlogger = await Blogger.findOneAndUpdate({_id: req.params.id}, req.body)
    res.status(200).send(updatedBlogger)
  } catch (error) {
    res.status(500).send(error)
  }
})

// delete by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlogger = await Blogger.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedBlogger);
  } catch (error) {
    res.status(500).send(error);
  }
})

// delete ALL
router.delete('/all', async (req, res) => {
  try {
    const deleteAllBloggers = await Blogger.deleteMany({});
    res.status(200).send(deleteAllBloggers);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;