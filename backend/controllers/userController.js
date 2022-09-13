const asyncHandler = require('express-async-handler');
const generateJWT = require('../config/generateJWT');
const User = require('../models/userModel');

const searchUser = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});

const signupUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic, isAdmin } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User alreay exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
        isAdmin
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            isAdmin: user.isAdmin,
            token: generateJWT(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error("Failed to create User");
    }
})

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            isAdmin: user.isAdmin,
            token: generateJWT(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error("Login Failed: Invalid email or password");
    }
})

module.exports = { signupUser, loginUser, searchUser }