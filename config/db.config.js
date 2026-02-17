const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Database Connected Successfully! 🚀");
    })
    .catch((error) => {
        console.log("Database connection failed.. ❌", error);
    });