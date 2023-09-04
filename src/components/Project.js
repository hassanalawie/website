import "../componentStyles/Project.css";

function Project(props) {
    return (
    <div className={`Project ${props.type==="HARDWARE" ? 'hardware' : 'software'}`}>
        <img src={props.image} className="project-image"/>
        <div style={{textAlign:"start"}}>
            <p style={{fontSize:"30px"}}>{props.title}</p>
            <p style={{fontSize:"25px"}}>Tools/Frameworks:{props.tools}</p>
            <p style={{fontSize:"20px"}}>{props.description}</p>
        </div>
    </div>
)

}

export default Project;
