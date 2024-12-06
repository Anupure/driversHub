const {Router} = require("express");
const {userModel} = require('../db');
const JWT_USER_SEC = require('../config');

const zod = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRouter = Router();

console.log(JWT_USER_SEC);

userRouter.post('/signup', async (req, res) => {
    const userSchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min({minLength:8,message:"Minimum 8 character needed"})
    })
    const {email,password} = req.body;

    try {
        const user =  await userModel.findOne({
            email
        })
        if(user){
            res.json({
                message: "User already exist, please login"
            })
            return
        }
        
    } catch (error) {
        console.log("unable to check for user in database" + error);
    }

    try {
        await userModel.create({
            email,
            password
        })
        res.json({
            message:"Signup Successful"
        })
    } catch (error) {
        console.log(`error creating user ${error}`);
        res.json({
            message:"there is some error mate"
        })
    }
});

userRouter.post('/signin', async (req, res) => {

    const {email, password} = req.body;

    try {
       const userEmail =  await userModel.findOne({
        email,
       }) 

       if(!userEmail){
        res.json({
            message:"User doesn't exist, Please signup first"
        })
        return
       }
    } catch (error) {
        console.log("unable to check for user in database" + error);
        res.json({
            message:"Internal database error"
        })
    }
    try {
        const user = await userModel.findOne({
            email,
            password
           }) 
        
           if(user){
            const token = jwt.sign({
                id: user._id,
            }, JWT_USER_SEC)

            res.json({
                token
            })
           }
           else{
            res.status(403).json({
                message: "Invalid Credentials"
            })
           }
    } catch (error) {
        console.log("unable to check for user in database" + error);
        res.json({
            message:"Internal database error"
        })
    }
});

userRouter.get('/purchases', (req, res) => {
    res.json({
        message:"Some messages"
    })
});

module.exports = {userRouter};