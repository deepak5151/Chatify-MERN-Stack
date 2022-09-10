const express = require('express');
const { chats } = require('./data/data');

const app = express();

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

app.listen(5000, console.log("Server started on port 5000"));