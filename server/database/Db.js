const mongoose = require('mongoose');

const connection = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_URI)
        console.log(`MongoDB connected:${con.connection.host}`);
    }
    catch (err) {
        console.log(`ERROR IN CATCH:${err}`);
    }
}
module.exports = connection;