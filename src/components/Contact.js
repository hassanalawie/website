import "../componentStyles/Contact.css";
import jumpingPsyduck from "../assets/jumpingPsyduck.png"
function Contact() {
    return (
        <div className="contact">

            <div  className="contact-title">
                <p>
                    Contact Info!!!
                </p>
            </div>
            <div className="contact-and-image">
                <img className="jumping-psyduck" src={jumpingPsyduck} />
                <div className="contacts-div">
                    <p className="contact-type">Twitter</p>
                    <p className="contact-type-info">@hassoonycodes</p>
                    <p className="contact-type">GitHub</p>
                    <p className="contact-type-info">haalawie</p>
                    <p className="contact-type">Email</p>
                    <p className="contact-type-info">hassan.alawie10@gmail.com</p>
                    <p className="contact-type">LinkedIn</p>
                    <p className="contact-type-info">hassanalawie</p>

                </div>
            </div>
        </div>
)

}

export default Contact;
