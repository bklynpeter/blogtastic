// DEPENDENCIES //
const mongoose = require('mongoose');
const { Schema } = mongoose;


// TODO SCHEMA //
const bloggerSchema = new Schema({
    content:  {
    type: String,
    required: true,
    },
    priority:  {
    type: String,
    required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Blogger = mongoose.model('blogger', bloggerSchema);


// EXPORT SCHEMATA //
module.exports = { Blogger };

