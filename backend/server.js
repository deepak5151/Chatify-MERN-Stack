const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send("/chats <br/> chat/id");
})

app.get('/api/chat/:id', (req, res) => {
    let chat = chats.find(c => c._id === req.params.id);
    res.send(chat);
})

app.get('/api/chats', (req, res) => {
    res.send(chats);
})

app.listen(process.env.PORT || 5000, console.log("Server started on port 5000"));