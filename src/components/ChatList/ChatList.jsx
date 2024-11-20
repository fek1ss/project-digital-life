import React, { useEffect, useState } from 'react';
import styles from './ChatList.module.css';

export default function ChatList({ user_id_1, onClick }) {
    const [dialogs, setDialogs] = useState([]);

    useEffect(() => {
        // Fetch the dialogs based on the user_id_1
        fetch(`/api/dialogs?user_id=${user_id_1}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setDialogs(data);
            })
            .catch((error) => {
                console.error('Error fetching dialogs:', error);
            });
    }, [user_id_1]); // Fetch dialogs whenever the user_id_1 changes

    return (
        <div>
            {dialogs.map((dialog) => (
                <div
                    key={dialog.dialog_id}
                    className={styles.chat}
                    onClick={() => onClick(dialog)} // Handle dialog selection
                >
                    <div className={styles['container-avatar']}>
                        <img
                            className={styles.chatlistAvatar}
                            src={dialog.dialog_avatar ? dialog.dialog_avatar : "/avatarIcon.png"}
                            alt="Avatar"
                        />
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.username}>
                            {dialog.user_one_username} / {dialog.user_two_username}
                        </h2>
                        <p className={styles.lastMessage}>{dialog.last_message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
