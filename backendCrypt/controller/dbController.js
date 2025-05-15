
const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://crypto:k4dukZDgkYiJ7CaO@crypto0.xicndel.mongodb.net/crypto?retryWrites=true&w=majority&appName=Crypto0",
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true 
            }
        );
        console.log("Database connection successfully done");
    } catch (error) {
        console.error("Error connecting to Mongoose:", error.message);
        process.exit(1);
    }
};

module.exports = dbConnect;
