import "../componentStyles/AboutMe.css";
import sleepyP from "../assets/sleepyPsyduck.png";
import questionP from "../assets/questionPsyduck.png";
import exP from "../assets/exclamationPSyduck.png";
import me from "../assets/me.png"
import yayP from "../assets/yayPsyduck.png"
function AboutMe() {
    return (
    <div className="about-me">
        <div className="overall-col">
            <div className="info-col">
            <div className="title-div">
            <p className="about-title">To Do List</p>
            <img width={179.64} height={100} src={sleepyP}/>
        </div>
                <div className="text-image-container">
                    <div className="text">
                        <p className="subtitle">1. Introduce Self</p>
                        <p className="explain-text">
                        Helloooo! I'm a Systems Design Engineering student from the University of Waterloo. I really like making things and will use any excuse (anniversaries, birthdays, boredom) to make something. If you wanna hear someone ramble, PLEASE ask me about one of my projects.
                        </p>
                    </div>
                    <div className="image">
                        <img width={67.6} height={100} src={questionP}/>
                    </div>
                </div>
                <div className="text-image-container">
                    <div className="text">
                        <p className="subtitle">2. Explain Background</p>
                        <p className="explain-text">
                        Helloooo! I'm a Systems Design Engineering student from the University of Waterloo. I really like making things and will use any excuse (anniversaries, birthdays, boredom) to make something. If you wanna hear someone ramble, PLEASE ask me about one of my projects.
                        </p>
                    </div>
                    <div className="image">
                        <img width={83.33} height={100} src={exP}/>
                    </div>
                </div>
                <div className="text-image-container">
                    <div className="text">
                        <p className="subtitle">3. Summarize Philosophy</p>
                        <p className="explain-text">
                        Helloooo! I'm a Systems Design Engineering student from the University of Waterloo. I really like making things and will use any excuse (anniversaries, birthdays, boredom) to make something. If you wanna hear someone ramble, PLEASE ask me about one of my projects.
                        </p>
                    </div>
                    <div className="image">
                        <img width={73.33} height={100} src={yayP}/>
                    </div>
                </div>
            </div>
            <div className="me-image">
                <img className="me-ac-image" src={me}/>
            </div>
        </div>
        
    </div>
)

}

export default AboutMe;
