import "../componentStyles/Education.css";
import { useState } from "react";
import VP from "../assets/VP.png";
import TMU from "../assets/TMU.png";
import UW from "../assets/UW.png";
import stressPsyduck from "../assets/stressPsyduck.png"

function Education() {
    const [redHover, setRedHover]=useState(false);
    const [blueHover, setBlueHover]=useState(false);
    const [yellowHover, setYellowHover]=useState(false);
    console.log(redHover && blueHover && yellowHover)
    return (
    <div className="education">
        <img className="stress-psyduck" src={stressPsyduck} />
        <div className="edu-title">
            <p>Education Timeline</p>
        </div>
        <div class="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item center"> Victoria Park CI <br></br>2018</div>
            <div className="grid-item"></div>
            <div className="grid-item">
            TMU <br></br> 2020

            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
            UW <br></br> Present
            </div>
            {/* <div className="grid-item center">Graduated from Victoria Park Collegiate</div> */}
            <div className="grid-item center"></div>
            <div className="grid-item center vert">
                <div className="red dot"></div>
                <div className="red vert-line"></div>
            </div>
            <div className="grid-item"></div>
 
            <div className="grid-item center vert">
                <div className="blue dot"></div>
                <div className="blue vert-line"></div>
            </div>
            {/* <div className="grid-item center">Currently enrolled in the University of Waterloo in the Systems Design Engineering</div> */}
            <div className="grid-item center"></div>
            <div className="grid-item center vert">
                <div className="yellow dot"></div>
                <div className="yellow vert-line"></div>
            </div>
            <div className="grid-item center">
                <div className="red line"></div>
            </div>
            <div className="grid-item">
                <div 
                onMouseOver={() => setRedHover(true)}
                onMouseOut={() => setRedHover(false)}
                className="red-co circle-outline">
                    <div className="red full-circle">
                        <img className="VP-image" src={VP}/>
                    </div>
                </div>
            </div>
            <div className="grid-item center">
                <div className="blue line"></div>
            </div>
            <div className="grid-item">
                <div 
                onMouseOver={() => setBlueHover(true)}
                onMouseOut={() => setBlueHover(false)}
                className="blue-co circle-outline">
                    <div className="blue full-circle">
                        <img className="TMU-image" src={TMU}/>
                    </div>
                </div>
            </div>
            <div className="grid-item center">
                <div className="yellow line"></div>
            </div>
            <div className="grid-item">
                <div 
                onMouseOver={() => setYellowHover(true)}
                onMouseOut={() => setYellowHover(false)}
                className="yellow-co circle-outline">
                    <div className="yellow full-circle">
                        <img className="UW-image" src={UW}/>
                    </div>
                </div>
            </div>
            <div className="grid-item"></div>

            <div className="grid-item modal">
                <p>Awards/Relative Involvement:</p>
                <p>Valedictorian, School President, Ontario Award for Student Leadership</p>
            </div>
            
            {/* <div className="grid-item center">Attended TMU in the Biomedical Engineering program for 2 years</div> */}
            <div className="grid-item center"></div>
            <div className="grid-item modal">
                <p>Awards/Relative Involvement:</p>
                <p>Biomedical Engineering Course Union President</p>
            </div>
            
            <div className="grid-item"></div>
            <div className="grid-item modal extra">
                <p>Relevant Courses:</p>
                <p>Digital Computation, Human Factors in Design, Data Structures and Algorithms,  Engineering Prototyping, Probability and Statistics</p>
            </div>
            
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item center">
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
        </div>

    </div>
)

}

export default Education;
