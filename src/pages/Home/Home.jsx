import React from 'react';
import styles from './Home.module.css'; // Импортируем стили как модули
import avatar from '../../../public/avatarIcon.png';
import settings from '../../../public/settingsIcon.png';
import notification from '../../../public/notificationIcon.png';
import FunTopic from '../../components/FunTopic/FunTopic.jsx';

export default function Home() {
    return (
        <div className={styles['home-container']}> {/* Используем стили из CSS-модуля */}

            <header>
                <div className={styles['common-section-header']}> {/* Используем стили из CSS-модуля */}

                    <div className={styles['first-section-header']}>
                        <img className={`${styles.avatar} ${styles.icon}`} src={avatar} alt="avatar" />
                        <h1>Topics</h1>
                    </div>
        
                    <div className={styles['second-section-header']}>
                        <img className={`${styles.notification} ${styles.icon}`} src={notification} alt="notification" />
                        <img className={`${styles.settings} ${styles.icon}`} src={settings} alt="settings" />
                    </div>

                </div>
            </header>
            <div className={styles['first-section']}>
                <h2>Section title</h2>
                <div className={styles.container}> {/* Используем стили из CSS-модуля */}
                    <FunTopic nickname="YourNicknameHere" />
                    <FunTopic nickname="YourNicknameHere" />
                    <FunTopic nickname="YourNicknameHere" />
                    <FunTopic nickname="YourNicknameHere" />
                    <FunTopic nickname="YourNicknameHere" />
                    <FunTopic nickname="YourNicknameHere" />
                    <FunTopic nickname="YourNicknameHere" />
                </div>
            </div>

            <div className={styles['second-section']}>
                <h1>Section title</h1>
            </div>

        </div>
    );
}
