import React from 'react';
import "../styles/Home.css"
import profile from "../assets/profile.jpg"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom";
function Home(props) {
    const resumeUrl="portfolio\src\assets\Sai_Krishna_Reddy.pdf";
    const handleDownload=()=>{
        const link=document.createElement('a');
        link.href=resumeUrl;
        link.target="_blank";
        link.download="Sai_Krishna_Reddy.pdf";
        link.click();
    }
    return (
        <div className='home'>
           <div className='personal-info'>
           <div className='image'>
            <img src={profile} alt="profilePic"/>
            </div>
            <div className='about'>
            <h2>Hello,My name is M Sai krishna Reddy</h2>
            <p>I am Software Developer with passion for learning </p>
            </div>
             <div className='contact'>
             <Link to="/contact"><EmailIcon/></Link>
             <Link to="https://github.com/saikrishna823"><GitHubIcon/></Link>
             <Link to="https://www.linkedin.com/in/sai-krishna-reddy-mule-b5a5b920a/"><LinkedInIcon/></Link>
             </div>
            </div>
            <div className='resume-download'>
             <button onClick={handleDownload}>Download CV</button>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
               <ul className='programming-languages'>
                 <h2>Programming Languages</h2>
                <li>Java,C,Python,CS Fundamentals</li>   
               </ul>
               <ul className='web-technologies'>
               <h2>Web Technologies</h2>
                <li>HTML5,CSS,JavaScript,ReactJs,ExpressJs,SQL,MongoDB</li>
               </ul>
               <ul className='soft-skills'>
               <h2>Soft-skills</h2>
                <li>Leadership skills, Networking, Problem solving, Communication</li>
               </ul>
                <ul className='frameworks-tools'>
                  <h2>Tools</h2>
               <li>VS code,Git,GitHub,Windows</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;