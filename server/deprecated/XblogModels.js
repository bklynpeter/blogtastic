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
        type:  Schema.Types.ObjectId,
        ref: "blogger"
    }
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
    bio: {
        type: String,
        required: true,
    },
    blogposts: [{
        type:  Schema.Types.ObjectId,
        ref: "blogpost"
    }]
}, { timestamps: true });

const Blogger = mongoose.model('blogger', bloggerSchema);


// EXPORT SCHEMATA //
module.exports = {Blogger, Blogpost};
