require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./model/user");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello from Auth System </h1>");
});

app.post("/register", async (req, res) => {
    try {

        // pasering data from front-End
        const { firstname, lastname, email, password } = req.body;

        // varification
        if (!(email && password && firstname && lastname)) {
            res.status(400).send("All Fields are Required...");
        }

        // if user is already exists
        const existingUser = await User.findOne({ email }).exec(); //PROMISES

        if (existingUser) {
            res.status(401).send("User already exists...");
        }

        // password encryption
        const myEncPassword = await bcrypt.hash(password, 10);

        // user creation
        const user = await User.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: myEncPassword
        });

        // token 
        const token = await jwt.sign(
            { user_id: user._id, email }, process.env.SECRET_KEY, { expiresIn: "2h" }
        );

        user.token = token;


        // sending all data password must not be send in JSON
        user.password = undefined;

        // just to view what data is generated 
        return res.status(201).json(user);

    } catch (error) {
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        res.status(400).send("field is missing");
    }

    const user = await User.findOne({ email })
        .then(() => {
            console.log("user found");
        })
        .catch(() => {
            res.status(400).send("Your are not register Yet...");
        });

});

module.exports = app