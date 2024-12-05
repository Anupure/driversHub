const express = require("express");
const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const mongoose = require('mongoose');
const axios = require('axios');
const cron = require('node-cron');
const Player = require('./truckersMPModels/player');
const Ban = require('./trackersMPModels/ban');
const Server = require('./truckersMPModels/Server');
const Event = require('./truckersMPModels/event');
const Vtc = require('./truckersMPModels/vtc');
const GameTime = require('./truckersMPModels/gameTime')


const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)


// Example: Fetch and save players
// async function fetchAndSavePlayers() {
//   try {
//     const response = await axios.get('https://api.truckersmp.com/v2/player/{id}');
//     const playerData = response.data.response;

//     await Player.updateOne({ id: playerData.id }, playerData, { upsert: true });
//     console.log('Player data saved');
//   } catch (err) {
//     console.error('Error fetching player data:', err.message);
//   }
// }

// Schedule periodic calls
// cron.schedule('0 */6 * * *', () => { // Every 6 hours
//   console.log('Fetching API data...');
//   fetchAndSavePlayers();
//   // Add other API calls here
// });


async function  connectionSetup (){
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(5000)
}

connectionSetup()
