import "../componentStyles/Navigation.css";

function Navigation(props) {
    return (
        <div
         className={props.selected?"selected-nav":"nav"}
         onClick={props.onClick} // Call the onClick function from props
         >
            <p className="title">{props.title}</p>
            <p className="subtext">{props.subtext}</p>
    </div>
)

}

export default Navigation;
