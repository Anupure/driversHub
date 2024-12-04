const {Router} = require("express");
const userModel = require('../db');

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message:"Some messages"
    })
});

userRouter.post('/signin', (req, res) => {
    res.json({
        message:"Some messages"
    })
});

userRouter.get('/purchases', (req, res) => {
    res.json({
        message:"Some messages"
    })
});

module.exports = {userRouter};