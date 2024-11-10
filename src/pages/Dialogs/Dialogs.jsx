// src/pages/Dialogs/Dialogs.jsx
import React, { useState, useEffect } from 'react';
import { connect, sendMsg } from '../../api';
import avatar from '../../../public/avatarIcon.png';
import ChatList from '../../components/FchatList/ChatList';
import styles from './Dialogs.module.css';
import DialogHeader from '../../components/DialogHeader/DialogHeader';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChatHistory from '../../components/ChatHistory/ChatHistory';

export default function Dialogs() {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => { // ComponentDidMount()
    connect((msg) => {
      console.log("NEW MESSAGE FROM USER");
      setChatHistory((prevHistory) => [...prevHistory, msg.data]);
    });
    console.log()
  }, []);


  const send = () => {
    if(currentMessage.trim() !== ''){
      sendMsg(currentMessage)
      setCurrentMessage('')
    }
  };

  const handleKeyDown = (event) =>{
    if (event.key === "Enter"){
      send();
    }
  }

  return (
    <div className={styles.dialogs}>
      <DialogHeader />

      <div className={styles['dialogs-main']}>
        <div className={styles['dialogs-sidebar']}>
          <ChatList avatar={avatar} username={"Damir"} lastMessage={"Привет, как дела?"} />
          <ChatList avatar={avatar} username={"Damir"} lastMessage={"Привет, как дела?"} />
          <ChatList avatar={avatar} username={"Damir"} lastMessage={"Привет, как дела?"} />
        </div>

        <div className={styles['dialogs-chat']}>
          <ChatHistory chatHistory={chatHistory} />

          <div className={styles['chat-input']}>
            <ChatInput 
            onKeyDown={handleKeyDown}
            value={currentMessage} 
            onChange={(e) => setCurrentMessage(e.target.value)} />
            <button onClick={send}>Отправить</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}





{/* <div className={styles['chat-messages']}>
            {chatHistory.map((msg, index) => (
              <div className="message" key={index}>{ msg }</div>
            ))}
          </div>  */}
