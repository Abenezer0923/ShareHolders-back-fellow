// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();
// var db_url = "";
// if (process.env.NODE_ENV === "production") {
//   db_url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?w=majority&readPreference=primary&retryWrites=true&directConnection=true&ssl=false&authMechanism=DEFAULT&authSource=admin`;
// } else {
//   db_url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?w=majority&readPreference=primary&retryWrites=true&directConnection=true&ssl=false&authMechanism=DEFAULT&authSource=admin`;
// }
// // const db_url = `mongodb://${process.env.DB_URL}:${process.env.MONGODB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// const connectDb = async () => {
//   console.log("connecting to db....");
//   console.log(db_url);
//   console.log(process.env.NODE_ENV);
//   return await mongoose
//     .connect(db_url, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     })
//     .catch((err) => {
//       if (err.message.indexOf("ECONNREFUSED") !== -1) {
//         console.error(
//           "Error: The server was not able to reach MongoDB. Maybe it's not running?"
//         );
//         process.exit(1);
//       } else {
//         throw err;
//       }
//     });
// };
// module.exports = { connectDb };


const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,       // Deprecated but still required for MongoDB Atlas clusters
            useUnifiedTopology: true,   // Deprecated but still required for MongoDB Atlas clusters
            connectTimeoutMS: 30000,    // Timeout after 30 seconds of inactivity during initial connection
            socketTimeoutMS: 45000,     // Timeout after 45 seconds of inactivity for active connections
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if there is an error
    }
};


module.exports = { connectDb };
