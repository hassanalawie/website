import React, { useState } from 'react';
import "../componentStyles/Frame.css";
import Navigation from "../components/Navigation"
import AboutMe from './AboutMe';
import { FaList, FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
function Frame() {
    const [currentPage, setCurrentPage] = useState("ABOUT ME");
    const navigationItems = [
        {
          title: "ABOUT ME",
          subtext: "Read me YAP about myself",
          selected: true
        },
        {
          title: "EDUCATION",
          subtext: "Read me YAP about my "
        },
        {
          title: "EXPERIENCE",
          subtext: "Read me YAP about jobs "
        },
        {
          title: "SKILLS",
          subtext: "Read me YAP about skills "
        },
        {
          title: "PROJECTS",
          subtext: "Read me YAP about projects "
        },
        {
          title: "CONTACT ME",
          subtext: "My detes"
        }
      ];
      const handleNavigationClick = (title) => {
        setCurrentPage(title);
    };
  return (
    <div className="Frame">
        <div className="top-bar">
            <div className='col-1'>
                <div className='a-1'>
                    <div className='icon'>
                        <FaList color='#6e6e6e' size={20}/>
                    </div>
                    <div className='icon'>
                        <AiOutlineAppstore color='#6e6e6e' size={20} />
                    </div>
                </div>
                <div className='icon'>
                    <FaRegTrashAlt color='#6e6e6e' size={20} />
                </div>
            </div>
            <div className='col-2'>
                <div className='icon'>
                    <IoCreateOutline  color='#6e6e6e' size={20} />
                </div>
            </div>
        </div>
        <div  className="bottom-section">
            <div className="nav-bar">
                {navigationItems.map((item)=>{
                    return(
                        <Navigation
                            selected={currentPage===item.title}
                            title={item.title}
                            subtext={item.subtext}
                            onClick={() => handleNavigationClick(item.title)}
                        />
                    )
                })}
            </div>
            {currentPage==="ABOUT ME"?(<AboutMe/>)
            :currentPage==="EDUCATION"?(<Education/>)
            :currentPage==="EXPERIENCE"?(<Experience/>)
            :currentPage==="SKILLS"?(<Skills/>)
            :currentPage==="PROJECTS"?(<Projects/>)
            :currentPage==="CONTACT ME"?(<Contact/>):
            (<div></div>)}
        </div>
    </div>
  );
}

export default Frame;
