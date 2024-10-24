import { useState } from "react";
import './Topics.css';
import '../Button/Button.css';


export default function Topics() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/create", { // Обновите маршрут для API
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }), // Уберите user_id на этом этапе
        });

        if (response.ok) {
            setMessage("Тема успешно создана!");
            setTitle("");
            setContent("");
        } else {
            setMessage("Ошибка при создании темы.");
        }
    };

    return (
        <div className="topics">
            <form onSubmit={handleSubmit}>
                <input
                    className='input-text'
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    name="text-topic"
                    placeholder='Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button className='submit-topic' type="submit">Отправить</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

// export default function Topics(){
//   return (
//     <>
//       <div className="topics">
//           <input className='input-text' type="text" placeholder='Title'/>
//           <textarea name="text-topic" id=""></textarea>
//           <button className='button'>Отправить</button>
//       </div>
//     </>
//   )
// }

