import express from 'express';

const app = express();


app.use(express.json());



app.post('/api/v1/user/signup', (req, res) => {
});

app.post('/api/v1/user/signin', (req, res) => {
});
app.get('/api/v1/user/courses', (req, res) => {
});
app.get('/api/v1/courses', (req, res) => {
});





app.listen(env.PORT || 5000)