import React, { useState } from 'react';
import styles from './Registration.module.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        gender: '',
        dob: '',
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
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
        if (!formData.password) errors.password = 'Password is required';
        else if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters';
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
        if (!formData.dob) errors.dob = 'Date of birth is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (validateForm()) {
            try {
                const formattedDob = new Date(formData.dob).toISOString();
                const dataToSend = {
                    user: {
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                        name: formData.name,
                        gender: formData.gender,
                        dob: formattedDob,
                    },
                };

                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dataToSend),
                });

                if (response.ok) {
                    setMessage('Registration successful!');
                    setFormData({ username: '', email: '', password: '', confirmPassword: '', name: '', gender: 'male', dob: '' });
                    setErrors({});
                } else {
                    const data = await response.json();
                    setMessage(data.message || 'Registration failed');
                }
            } catch (error) {
                console.error('Registration error:', error);
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className={styles.registrationContainer}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className={styles.registrationForm}>
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
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? styles.inputError : ''}
                    />
                    {errors.name && <small className={styles.error}>{errors.name}</small>}
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.inputError : ''}
                    />
                    {errors.email && <small className={styles.error}>{errors.email}</small>}
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
                <div className={styles.formGroup}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? styles.inputError : ''}
                    />
                    {errors.confirmPassword && <small className={styles.error}>{errors.confirmPassword}</small>}
                </div>
                <div className={styles.formGroup}>
                    <label>Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={errors.gender ? styles.inputError : ''}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <small className={styles.error}>{errors.gender}</small>}
                </div>
                <div className={styles.formGroup}>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={errors.dob ? styles.inputError : ''}
                    />
                    {errors.dob && <small className={styles.error}>{errors.dob}</small>}
                </div>
                <button type="submit" className={styles.button}>Register</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default Registration;