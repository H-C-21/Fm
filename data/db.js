const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_CONNECTION);
        console.log('connection established');
        
    }
    catch (error) {
        console.log('Error occured');
    }

}
module.exports = connectDb;