import styles from './Registration.module.css';

export default function Registration() {
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <h1>Регистрация пользователя</h1>
        <div className={styles.inner_container}>
          <div className={styles.na}>
            <label htmlFor="name" className={styles.label}>Имя пользователя:</label>
            <input className={`${styles.input} ${styles.name}`} type="text" id="name" />

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input className={`${styles.input} ${styles.email}`} type="email" id="email" />

            <label htmlFor="password" className={styles.label}>Пароль:</label>
            <input className={`${styles.input} ${styles.password}`} type="password" id="password" />

            <div className={styles.gender_option}>
              <label htmlFor="male">Male:</label>
              <input type="radio" name="gender" id="male" value="male" />
            </div>
            <div className={styles.gender_option}>
              <label htmlFor="female">Female:</label>
              <input type="radio" name="gender" id="female" value="female" />
            </div>
          </div>

          <button className={styles.button}>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
