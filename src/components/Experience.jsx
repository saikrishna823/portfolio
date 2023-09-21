import React from 'react';
import {VerticalTimelineElement,VerticalTimeline} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import "../styles/Experience.css"
function Experience(props) {
    return (
        <div className='experience'>
           <VerticalTimeline lineColor='rgb(33, 150, 243)'>
             <VerticalTimelineElement
             className="vertical-timeline-element--engineering"
    contentStyle={{ background: '#21325e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon/>}>
            <h2>Institution:<span>Gayatri Vidya Parishad College of Engineering</span></h2>
            <h2>Course:<span >Bachelor of Technology</span></h2>
            <h2>Branch:<span >Computer Science of Engineering</span></h2>
            <h2>CGPA:<span>9.04(Present)</span></h2>
             </VerticalTimelineElement>
             <VerticalTimelineElement
             className="vertical-timeline-element--intermediate"
             contentStyle={{ background: '#21325e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018-2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon/>}>
            <h2>Institution:<span>Narayana Junior College</span></h2>
            <h2>Course:<span>Intermediate</span></h2>
            <h2>Stream:<span>M.P.C</span></h2>
            <h2>GPA:<span>10</span></h2>
             </VerticalTimelineElement>
             <VerticalTimelineElement
             className="vertical-timeline-element--school"
             contentStyle={{ background: '#21325e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon/>}>
            <h2>Institution:<span>Sri Vivekananda High School</span></h2>
            <h2>Course:<span>10 </span></h2>
            <h2>GPA:<span>10 </span></h2>
             </VerticalTimelineElement>
           </VerticalTimeline>
        </div>
    );
}

export default Experience;