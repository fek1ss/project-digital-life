import React, { useEffect, useState } from 'react';
import './Chats.css';
import '../Button/Button.css';

export default function Chats() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Инициализация WebSocket
        const ws = new WebSocket('ws://localhost:8000/ws');

        // Обработчик входящих сообщений
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        // Обработчик ошибок
        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Закрытие WebSocket при размонтировании компонента
        ws.onclose = () => {
            console.log('WebSocket closed');
        };

        setSocket(ws);

        // Закрытие WebSocket при размонтировании компонента
        return () => {
            ws.close();
        };
    }, []);

    // Функция для отправки сообщения
    const sendMessage = () => {
        if (socket && input) {
            socket.send(JSON.stringify({ message: input }));
            setInput(''); // Очистка поля ввода после отправки
        }
    };

    return (
        <div className="chats-container">
            <div className="container">
                {messages.map((msg, index) => (
                    <div key={index}>{msg.message}</div>
                ))}
            </div>

            <div className="container-subMessage">
                <input
                    type="text"
                    className="inp-message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Введите сообщение"
                />
                <button
                    className="button sub-message"
                    onClick={sendMessage}
                >
                    Отправить
                </button>
            </div>
        </div>
    );
}
