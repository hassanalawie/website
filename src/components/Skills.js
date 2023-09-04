import "../componentStyles/Skills.css";
import SkillCard from "./SkillCard";
import rct from "../assets/react.png"
import ts from "../assets/typescript.png";
import cy from "../assets/cypress.png"
import html from "../assets/html.png"
import seo from "../assets/SEO.png"
import node from "../assets/node.png"
import figma from "../assets/figma.png"
import rn from "../assets/reactNative.png"
import python from "../assets/python.png"
import winePsyduck from "../assets/winePsyduck.png"

function Skills() {
    return (
    <div className="skills">
        <div  className="skills-title">
            <p>
                Skills
            </p>
        </div>
        <img width={120} height={130} src={winePsyduck}/>
        
        <div className="table">
            <SkillCard imgsrc={rct} fronttext="React" backtext="styled components, mobx, MJML, enzyme"/>
            <SkillCard imgsrc={ts} fronttext="TypeScript" backtext="Created ESLint linter, used in several work terms and personal projects"/>
            <SkillCard imgsrc={html} fronttext="HTML/CSS/JS" backtext="Very confident with vanila JS, HTML and CSS"/>
            <SkillCard imgsrc={cy} fronttext="Cypress" backtext="Major advocate for automated testing, "/>
            <SkillCard imgsrc={seo} fronttext="Search Engine Optimization" backtext="Used Google Search Console, and Google Lighthouse to optimze web page"/>
            <SkillCard imgsrc={figma} fronttext="Figma" backtext="Designed"/>
            <SkillCard imgsrc={node} fronttext="NodeJS" backtext="Hi"/>
            <SkillCard imgsrc={rn} fronttext="React-Native" backtext="Hi"/>
            <SkillCard imgsrc={python} fronttext="Python" backtext="Hi"/>
        </div>
    </div>
)

}

export default Skills;
