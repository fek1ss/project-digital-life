import React, { useState } from 'react';
import CreatePost from './components/CreatePost';  // Импортируем компонент создания поста
import TabSection from "./components/TabSection/TabSection.jsx";
import headerImg from "../public/header-img.webp";
<<<<<<< HEAD
import About from "./components/About/About.jsx";
import InnerMain from "./components/InnerMain.jsx"
import Settings from "./components/Settings.jsx";
import Registration from "./components/Registration.jsx";

function App() {
    const [message, setMessage] = useState(''); // Состояние для хранения сообщений
    const [error, setError] = useState(''); // Состояние для хранения ошибок

    const handlePostCreated = (msg) => {
        setMessage(msg);  // Устанавливаем сообщение об успешном создании поста
        setError('');     // Сбрасываем ошибки
    };

    const handleError = (err) => {
        setError(err);   // Устанавливаем сообщение об ошибке
        setMessage('');  // Сбрасываем успешные сообщения
    };
    const [tab, setTab] = useState("main")
    return (
        <>
            <div className="header-container">
                <img className="header-image" src={headerImg} alt="header-cap"/>
            </div>
            <header>
                <TabSection active={tab} onChange={(current) => setTab(current)}/>
            </header>
            <main>
                {tab === "about" && <About/>}
                {tab === "main" && <InnerMain/>}
                {tab === "topics" && <CreatePost
                    onPostCreated={handlePostCreated} // Передаем коллбэк для успешного создания поста
                    onError={handleError}              // Передаем коллбэк для обработки ошибок
                />}
                {tab === "settings" && <Settings/>}
                {tab === "registration" && <Registration/>}
            </main>
            {message && <div style={{color: 'green'}}>{message}</div>} {/* Сообщение об успехе */}
            {error && <div style={{color: 'red'}}>{error}</div>} {/* Сообщение об ошибке */}
=======
import InnerMain from "./components/InnerMain";
import TabSection from "./components/TabSection/TabSection";
import About from "./components/About/About";
import Settings from "./components/Settings";
import Registration from "./components/Registration";
import { useState } from "react";
import Topics from "./components/Topics/Topics";
import Chats from "./components/Chats/Chats";
>>>>>>> f393ca4fddc5d91d56d1a35cfebc2411d2ee4b7b


        </>

<<<<<<< HEAD
        // <>
        //     <div className="header-container">
        //         <img className="header-image" src={headerImg} alt="header-cap" />
        //     </div>
        //     <header>
        //         <TabSection active={tab} onChange={(current)=> setTab(current)}/>
        //     </header>
        //     <main>
        //
        //         {tab === "about" && <About />}
        //         {tab === "main" && <InnerMain />}
        //         {tab === "topics" && <Topics />}
        //         {tab === "chats" && <Chats />}
        //         {tab === "settings" && <Settings />}
        //         {tab === "registration" && <Registration />}
        //     </main>
        // </>
    );
=======
  return (
    <>
      <div className="header-container">
        <img className="header-image" src={headerImg} alt="header-cap" />
      </div>
      <header>
        <TabSection active={tab} onChange={(current)=> setTab(current)}/>
      </header>
      <main>
        {tab === "about" && <About />}
        {tab === "main" && <InnerMain />}
        {tab === "topics" && <Topics />}
        {tab === "chats" && <Chats />}
        {tab === "settings" && <Settings />} 
        {tab === "registration" && <Registration />}
      </main>
    </>
  )
>>>>>>> f393ca4fddc5d91d56d1a35cfebc2411d2ee4b7b
}

export default App;
