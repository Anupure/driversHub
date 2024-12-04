const {Router} = require('express');

const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.json({
        message:"Some messages"
    })
});

courseRouter.get('/preview', (req, res) => {
    res.json({
        message:"Some messages"
    })
});

module.exports = {courseRouter};
