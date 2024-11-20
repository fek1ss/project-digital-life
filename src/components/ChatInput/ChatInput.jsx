import React, { useState, useEffect } from 'react';
import './ChatInput.css';

export default function ChatInput({ dialogID, recipientID }) {
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [userID, setUserID] = useState('');

    useEffect(() => {
        // Получаем user_id из куки
        const extractedUserID = document.cookie
            .split('; ')
            .find((row) => row.startsWith('user_id='))
            ?.split('=')[1];

        if (!extractedUserID) {
            console.error('User ID not found in cookies');
            return;
        }

        setUserID(extractedUserID);

        if (!dialogID) {
            console.error('Dialog ID is required to establish WebSocket connection');
            return;
        }

        // Устанавливаем соединение WebSocket с параметрами
        const socketUrl = `ws://localhost:8000/ws?dialog_id=${dialogID}&recipient_id=${recipientID}`;
        const socket = new WebSocket(socketUrl);

        socket.onopen = () => {
            console.log('WebSocket connection established');
            setIsConnected(true);
        };

        socket.onmessage = (event) => {
            console.log('Message received:', event.data);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
            setIsConnected(false);
        };

        setWs(socket);

        // Cleanup on unmount
        return () => {
            socket.close();
            setWs(null);
        };
    }, [dialogID, recipientID]);

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (!ws || ws.readyState !== WebSocket.OPEN) {
            console.error('WebSocket is not open');
            return;
        }

        if (!message.trim()) {
            console.error('Message cannot be empty');
            return;
        }

        const msg = {
            user_id: userID, // Отправитель
            recipient_id: recipientID, // Получатель
            dialog_id: dialogID, // Диалог
            message: message.trim(), // Текст сообщения
            time: new Date().toISOString(), // Время отправки
            typing: false, // Статус печати
        };

        ws.send(JSON.stringify(msg));
        console.log('Message sent:', msg);
        setMessage('');
    };

    const handleChange = (e) => setMessage(e.target.value);

    return (
        <div className="ChatInput">
            <form onSubmit={handleSendMessage}>
                <input
                    value={message}
                    onChange={handleChange}
                    placeholder="Enter a message"
                    type="text"
                    disabled={!isConnected}
                />
                <button type="submit" disabled={!isConnected}>
                    Send
                </button>
            </form>
        </div>
    );
}
