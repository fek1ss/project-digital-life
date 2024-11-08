import React from 'react';
import styles from './ChatList.module.css'; // Импортируем стили как модули
import { MdMargin } from 'react-icons/md';

export default function ChatList({ avatar, username, lastMessage, onClick, isActive }) {
  return (
      <div className={isActive ? `${styles.chat} ${styles.background}` : styles.chat} onClick={onClick}>
        <div className={styles['container-avatar']}>
          <img className={styles.chatlistAvatar} src={avatar} alt="avt" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.username}>{username}</h2>
          <p className='lastMessage'>{lastMessage}</p>
        </div>
      </div>
  );
}
