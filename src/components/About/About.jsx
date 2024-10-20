import "./About.css";
import {ways} from '../../data';
import WaytoTeach from "../WaytoTeach";

export default function About(){
  return (
    <div className="container">
      <ul>
        <WaytoTeach {...ways[0]} />
      </ul>
    </div>
    

  )
}