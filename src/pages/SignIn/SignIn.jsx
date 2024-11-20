import React, { useState } from 'react';
import styles from './SignIn.module.css';

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.username) errors.username = 'Username is required';
        if (!formData.password) errors.password = 'Password is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (validateForm()) {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user: formData }),
                });

                if (response.ok) {
                    const data = await response.json();
                    const { user_id } = data; // Получаем user_id из ответа

                    // Сохраняем user_id в localStorage
                    localStorage.setItem('user_id', user_id);

                    setMessage('Login successful!');
                    setFormData({ username: '', password: '' });
                    setErrors({});
                } else {
                    const data = await response.json();
                    setMessage(data.message || 'Login failed. Please check your credentials.');
                }
            } catch (error) {
                console.error('Login error:', error);
                setMessage('An error occurred. Please try again.');
            }
        } else {
            setLoading(false);
        }
    };


    return (
        <div className={styles.signinContainer}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles.signinForm}>
                <div className={styles.formGroup}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={errors.username ? styles.inputError : ''}
                    />
                    {errors.username && <small className={styles.error}>{errors.username}</small>}
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? styles.inputError : ''}
                    />
                    {errors.password && <small className={styles.error}>{errors.password}</small>}
                </div>
                <button type="submit" className={styles.button}>Sign In</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default SignIn;