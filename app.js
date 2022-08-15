const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES

app.get('/', (req,res) => {
    res.send ('We are on home');
});

//CONNECT TO DB

mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrkParser: true }, () =>
    console.log('connected to DB!')
);

//LISTENING

app.listen(3000);