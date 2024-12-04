const express = require("express");
const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)

async function  connectionSetup (){
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(5000)
}

connectionSetup()
