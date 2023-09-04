import "../componentStyles/SkillCard.css";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
function SkillCard(props) {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick=()=>{
        setIsFlipped(!isFlipped);
    }
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="front-card" onClick={handleClick}>
          <img src={props.imgsrc} />
          <p>{props.fronttext}</p>
        </div>
        <div className="back-card" onClick={handleClick}>
          {props.backtext}
        </div>
      </ReactCardFlip>
)

}

export default SkillCard;
