const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/api/', (req, res) => {
    res.send("/chats <br/> chat/id");
})

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, console.log("Server started on port 5000"));