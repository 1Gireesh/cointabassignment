const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const connect = require('./config/connect');
console.log(connect)
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', userRouter)

app.all('/', (req, res) => res.send('Works!'))

app.listen(port, async () => {
    connect().then(() => {
        console.log(`listening to http://localhost:${port}`);
    });
})
