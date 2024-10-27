import './Chats.css';
import '../Button/Button.css';

export default function Chats(){
  return(
    <>
      <div className="chats-container">
        <input type="text" className="inp-user" placeholder=""/>
        
        <div className="container">
          <div className="message">
            <p>Сообщение</p>
          </div>
        </div>

        <div className="container-subMessage">
          <input type="text" className="inp-message" />
          <button className="button sub-message">Отправить</button>
        </div>
      </div>
    </>
  )
}
