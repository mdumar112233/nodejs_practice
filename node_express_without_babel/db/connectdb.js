import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const DB_options = {
            user: 'umar faruk',
            pass: 'umar2233',
            dbName: 'myDb',
            authSource: 'myDb'
        }
        await mongoose.connect('mongodb://localhost:27017/test');
        // await mongoose.connect('mongodb://localhost:27017/test', DB_options);
        return console.log('connect db');
    } catch (err) {
        return console.log(err);
    }
}

export default connectDB;


// const connectDB = () => {
//     return mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => console.log('connect db'))
//     .catch(err => console.log(err))
// }

// export default connectDB;


