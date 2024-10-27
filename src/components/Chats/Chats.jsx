import React, { useState, useEffect } from 'react';
import './Chats.css';
import '../Button/Button.css';

export default function Chats(){
  return(
    <>
      <div className="chats-container">
        <input type="text" className="inp-user" placeholder=""/>
        
        <div className="container">
          <div className="message">
            <p>Сообщение</p>
          </div>
        </div>

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket closed');
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (socket && input && username) {
            socket.send(JSON.stringify({ username, message: input }));
            setInput('');
        }
    };

    return (
        <>
            <div className="chats-container">
                {/* Поле для ввода имени пользователя */}
                <input
                    type="text"
                    className="inp-user"
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Контейнер для сообщений */}
                <div className="container">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
                            <p><strong>{msg.username}:</strong> {msg.message}</p>
                        </div>
                    ))}
                </div>

                {/* Поле ввода и кнопка отправки */}
                <div className="container-subMessage">
                    <input
                        type="text"
                        className="inp-message"
                        placeholder="Введите сообщение"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="button sub-message" onClick={sendMessage}>
                        Отправить
                    </button>
                </div>
            </div>
        </>
    );
}
