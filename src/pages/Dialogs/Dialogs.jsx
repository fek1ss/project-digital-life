import React, { useState, useEffect } from 'react';
import { connect, sendMsg } from '../../api'; // Assuming connect and sendMsg handle WebSocket communication
import DialogHeader from '../../components/DialogHeader/DialogHeader';
import ChatList from '../../components/ChatList/ChatList';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import ChatInput from '../../components/ChatInput/ChatInput';
import styles from './Dialogs.module.css';

export default function Dialogs() {
  const [chats, setChats] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedDialog, setSelectedDialog] = useState(null);
  const [userId, setUserId] = useState(''); // This will store the current user's ID

  useEffect(() => {
    // Fetch the chats once when the component is mounted
    const fetchChats = async () => {
      try {
        const response = await fetch('/api/dialogs');
        if (!response.ok) {
          throw new Error('Ошибка при получении чатов');
        }
        const data = await response.json();
        setChats(data); // Save the chats in the state
      } catch (error) {
        console.error('Ошибка загрузки чатов:', error);
      }
    };

    fetchChats();

    // Establish WebSocket connection
    connect((msg) => {
      console.log("Новое сообщение получено");
      if (selectedDialog && msg.dialog_id === selectedDialog.dialog_id) {
        setChatHistory((prevHistory) => [...prevHistory, msg]);
      }
    });
  }, [selectedDialog]);  // Effect will run when the selected dialog changes

  const handleChatSelect = (chat) => {
    // Set the selected chat and load its message history
    setSelectedDialog(chat);
    setChatHistory(chat.history || []);
  };

  const handleSendMessage = (event) => {
    if (event.key === 'Enter') {
      const message = event.target.value.trim();
      if (message && selectedDialog) {
        sendMsg({ message, dialog_id: selectedDialog.dialog_id, user_id: userId }); // Send message
        event.target.value = ''; // Clear the input field
      }
    }
  };

  return (
      <div className={styles.dialogs}>
        <DialogHeader />

        <div className={styles['dialogs-main']}>
          <div className={styles['dialogs-sidebar']}>
            {chats.length > 0 ? (
                chats.map((chat) => (
                    <ChatList
                        key={chat.dialog_id}
                        dialog_id={chat.dialog_id}
                        avatar={chat.avatar || "/avatarIcon.png"}
                        user_id_1={chat.user_id_1}
                        user_id_2={chat.user_id_2}
                        lastMessage={chat.lastMessage}
                        onClick={() => handleChatSelect(chat)}
                        isActive={chat.dialog_id === selectedDialog?.dialog_id}
                    />
                ))
            ) : (
                <p>Загружаются чаты или нет доступных данных...</p>
            )}
          </div>

          <div className={styles['dialogs-chat']}>
            <ChatHistory chatHistory={chatHistory} />

            <div className={styles['chat-input']}>
              <ChatInput onKeyDown={handleSendMessage} />
              <button onClick={() => handleSendMessage({ key: 'Enter', target: { value: 'Отправить' } })}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
  );
}
