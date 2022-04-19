// DEPENDENCIES //
const mongoose = require('mongoose');


// CONNECT TO MONGODB //
const MONGO_URI =
'mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/blogtastic?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'blogtastic'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;


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

