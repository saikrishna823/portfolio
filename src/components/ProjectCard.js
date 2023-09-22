import React from 'react';
import "../styles/ProjectCard.css"
function ProjectCard({pic,title,tools}) {
    return (
        <div className='project-card'>
            <h1>{title}</h1>
            <img src={pic} alt="pic"/>
            <p>{tools}</p>
        </div>
    );
}

export default ProjectCard;