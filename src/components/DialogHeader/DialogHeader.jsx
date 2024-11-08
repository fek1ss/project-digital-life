import styles from './DialogHeader.module.css';
import avatar from '../../../public/avatarIcon.png';

export default function DialogHeader(){
  return (
  <div className={styles['dialogs-header']}>
          <div className={styles.container}>
            <h2>Conversations</h2>
  
            <div className={styles.user}>
              <img className={styles['avatar icon']} src={avatar} alt="avatar" />
              <h2>Name</h2>
            </div>
          </div>
          
        </div>
  )
}
