// DEPENDENCIES //
const mongoose = require('mongoose');
const MONGO_URI =
    'mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/blogtastic?retryWrites=true&w=majority';


// CONNECT TO MONGODB //
// const connectDB = MONGO_URI => {
//     return mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         dbName: 'blogtastic'
//     })
//     .then(() => console.log('Connected to Mongo DB.'))
//     .catch(err => console.log(err));
// }

// module.exports = connectDB;


module.exports = async() => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'blogtastic'
        };
        await mongoose.connect(
            MONGO_URI,
            connectionParams
        );
        console.log('Connected to MongoDB.')
    } catch (error) {
        console.log('Could not connect to MongoDB', error)
    }
}