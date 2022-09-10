import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Chats = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get('/api/chats');
        console.log(data);
        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);
    return (
        <div>
            {chats.map(chat => <h4 key={chat._id}>{chat.chatName}</h4>)}
        </div>
    );
}
