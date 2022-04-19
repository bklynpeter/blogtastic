// DEPENDENCIES //
const mongoose = require('mongoose');
const { Schema } = mongoose;


// BLOGPOST SCHEMA //
const blogpostSchema = new Schema({
    headline:  {
    type: String,
    required: true,
    },
    text:  {
    type: String,
    required: true,
    },
    blogger: {
        type: String,
        required: true,
    },
    blogger_id: {
    type: Schema.Types.ObjectId,
    ref: 'blogger',
    required: true,
    },
}, { timestamps: true });

const Blogpost = mongoose.model('blogpost', blogpostSchema);


// BLOGGER SCHEMA //
const bloggerSchema = new Schema({
    firstName:  {
    type: String,
    required: true,
    },
    lastName:  {
    type: String,
    required: true,
    },
    headline: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Blogger = mongoose.model('blogger', bloggerSchema);


// EXPORT SCHEMATA //
module.exports = {
  Blogger,
  Blogpost,
};

