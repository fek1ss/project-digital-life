import Message from "../Message/Message"
import styles from "./ChatHistory.module.css"

export default function ChatHistory({chatHistory}){
  const messages = chatHistory.map((msg) => (
    <Message key={msg.timeStamp} message={msg} />
  ));

  return(
    <div className={styles['ChatHistory']}> 
      {messages}
    </div>
  )
}