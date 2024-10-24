import React, { useState } from "react";
import "./Topics/Topics.css"
function CreatePost({ onPostCreated, onError }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title: title,
            content: content,
            user_id: 1, // Предположим, что ID пользователя фиксирован для этого примера
        };

        // Отправляем POST-запрос на бэкэнд
        fetch('/api/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Post created successfully:', data);
                onPostCreated('Post created successfully!'); // Вызываем коллбэк для успешного создания поста
                setTitle('');  // Очищаем поля формы
                setContent('');
            })
            .catch(error => {
                console.error('Error creating post:', error);
                onError('Error creating post: ' + error.message); // Вызываем коллбэк для обработки ошибок
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <>
                <div className="posts">
                    <button className="button" type="submit">Get Post</button>
                </div>
            </>
        </form>
    );
}

export default CreatePost;
