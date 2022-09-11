const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log(`Database connect at port: ${connection.connection.host}`);
    }
    catch (err) {
        console.log(`Error while connecting to DB, ${err}`);
    }
}

module.exports = connectDB;