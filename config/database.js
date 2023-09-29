const mongoose = require("mongoose");

const { MONGO_URL } = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(console.log("DB connection successful..."))

        .catch((err) => {
            console.log("DB connection unsuccess");
            console.log(err);
            process.exit(1)
        });
};

