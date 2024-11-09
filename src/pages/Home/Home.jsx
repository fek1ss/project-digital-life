import React from 'react';
import styles from './Home.module.css'; // Импортируем стили как модули
import avatar from '../../../public/avatarIcon.png';
import settings from '../../../public/settingsIcon.png';
import register from '../../../public/online-registration.png';
import notification from '../../../public/notificationIcon.png';
import FunTopic from '../../components/FunTopic/FunTopic.jsx';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className={styles['home-container']}>

            <header>
                <div className={styles['common-section-header']}> 

                    <div className={styles['first-section-header']}>
                        <img className={`${styles.avatar} ${styles.icon}`} src={avatar} alt="avatar" />
                        <h1>Topics</h1>
                    </div>
        
                    <div className={styles['second-section-header']}>
                        <Link to="/registration" className={styles['link']}> 
                            <img className={styles['icon']} src={register} alt="" />
                            <p>registration</p>
                        </Link>
                        <Link to="/signIn" className={styles['link']}> 
                            <img className={styles['icon']} src={register} alt="" />
                            <p>sign in</p>
                        </Link>
                        <img className={styles['icon']} src={notification} alt="notification" />
                        <img className={styles['icon']} src={settings} alt="settings" />
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
