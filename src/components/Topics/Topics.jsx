import './Topics.css';
import '../Button/Button.css';

export default function Topics(){
  return (
    <>
      <div className="topics">
          <input className='input-text' type="text" placeholder='Title'/>
          <textarea name="text-topic" id=""></textarea>
          <button className='button'>Отправить</button>
      </div>
    </>
  )
}