import Message from "../Message/Message"
import styles from "./ChatHistory.module.css"

export default function ChatHistory({ chatHistory }) {
  // Логирование для проверки данных
  console.log("Chat History:", chatHistory);

  const messages = chatHistory.map((msg) => (
      <Message key={msg.timeStamp} message={msg.data} />
  ));

  return (
      <div className={styles['ChatHistory']}>
        {messages}
      </div>
  );
}
