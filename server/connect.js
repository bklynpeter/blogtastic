// DEPENDENCIES //
const mongoose = require('mongoose');


// CONNECT TO MONGODB //
const connectDB = MONGO_URI => {
return mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'blogtastic'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
}

module.exports = connectDB;
