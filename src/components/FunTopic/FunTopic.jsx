import './FunTopic.css';

export default function FunTopic({nickname}){
  return(
      <div className="topics">
        <div className="img"><img src="" alt="" /></div>
        <div className="nickname">
          <p className='nickname'>{nickname}</p>
        </div>
      </div>
  )
}