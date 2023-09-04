import "../componentStyles/Experience.css";
import BR1 from "../assets/BR1.png";
import F1 from "../assets/F1.png"
import F2 from "../assets/F2.png"
function Experience() {
    return (
    <div className="experience">
        <div  className="experience-title">
            <p>
                Experience
            </p>
        </div>
        <div class="grid-container-2">
            <div class="grid-item-2">
                <img className="psyduck-job" src={BR1}/>
                <p>BioRender: January - April 2023</p>
                <p className="job-descriptor">Collaborated on enhancing the performance and SEO scores of the marketing websites, and verified the improvements through tools such as Google Lighthouse, Performance insights, and Google Search Console.
Led experiment on the editor and monitored changes to determine if experiment was a success</p>
            </div>
            <div class="grid-item-2">
                <img className="psyduck-job" src={F1}/>
                <p>Faire Term 2: May - August 2022</p>
                <p className="job-descriptor">Acted as Directly Responsible Engineer for project regarding Duties taxes that lasted over two months and monitored launch of project over the course of the experiment
Created a design and scoping document for the implementation of a self-serve help-center</p>
            </div>
            <div class="grid-item-2">
                <img className="psyduck-job" src={F2}/>
                <p>Faire Term 1: September -December 2021 </p>
                <p className="job-descriptor">Worked on developing reusable components for emails using MJML with the intention of making company marketing emails more consistent and easier to develop.
Acted as Directly Responsible Engineer for experiment focused on click through rate</p>
            </div>
        </div>
    </div>
)

}

export default Experience;
