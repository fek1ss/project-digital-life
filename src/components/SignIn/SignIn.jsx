import React, { useState } from 'react';
import './SignIn.css';

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

        console.log("Form data before submit:", formData); // Проверка данных

        if (validateForm()) {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user: formData }), // Оборачиваем formData в user
                });
                console.log("Response status:", response.status); // Статус ответа

                if (response.ok) {
                    setMessage('Login successful!');
                    setFormData({ username: '', password: '' });
                    setErrors({});
                } else {
                    const data = await response.json();
                    setMessage(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                setMessage('An error occurred. Please try again.');
            }

        }
        console.log("Отправляемые данные:", formData);

    };


    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className="signin-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={errors.username ? 'input-error' : ''}
                    />
                    {errors.username && <small className="error">{errors.username}</small>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'input-error' : ''}
                    />
                    {errors.password && <small className="error">{errors.password}</small>}
                </div>
                <button type="submit">Sign In</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default SignIn;
