const {Router} = require("express");

const adminRouter = Router();

adminRouter.post('/signup', (req,res)=> {
    res.json({
        Message: "Admin Signup"
    })
})

adminRouter.post('/signin', (req,res)=> {
    res.json({
        Message: "Admin Signup"
    })
})

adminRouter.post('/course', (req,res)=> {
    res.json({
        Message: "Admin create post"
    })
})

adminRouter.put('/course', (req,res)=> {
    res.json({
        Message: "Admin modify course"
    })
})

adminRouter.delete('/course', (req,res)=> {
    res.json({
        Message: "Admin Signup"
    })
})

adminRouter.get('/course/bulk', (req,res)=> {
    res.json({
        Message: "Admin Signup"
    })
})

module.exports = {adminRouter};