import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../helpers/projects';
import '../styles/Projects.css'
function Projects(props) {
    return (
        <div className='projects'>
           {
            projects.map((project)=><ProjectCard title={project.name} pic={project.image} tools={project.tools}/>)
           }
        </div>
    );
}

export default Projects;