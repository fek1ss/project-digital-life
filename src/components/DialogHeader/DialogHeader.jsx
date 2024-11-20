import React, { useState } from "react";

const DialogsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);

    // Обработчик ввода в поисковую строку
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Обработчик отправки поискового запроса
    const handleSearch = async () => {
        if (!searchQuery) return; // Не выполнять запрос, если строка пустая

        try {
            const response = await fetch(
                `http://localhost:8000/api/dialogs?username=${encodeURIComponent(searchQuery)}`
            );
            if (!response.ok) {
                throw new Error("Ошибка при выполнении запроса");
            }
            const data = await response.json();
            setResults(data); // Сохраняем результаты поиска
        } catch (error) {
            console.error("Ошибка поиска:", error);
        }
    };

    return (
        <div className="dialogs-page">
            <h1>Разговоры</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Поиск пользователей..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearch}>Поиск</button>
            </div>
            <div className="search-results">
                {results.length > 0 ? (
                    <ul>
                        {results.map((user) => (
                            <li key={user.id}>
                                {user.username} {/* Выводим имя пользователя */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};

export default DialogsPage;
