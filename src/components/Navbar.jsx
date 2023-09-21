import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css"
import { useLocation } from 'react-router-dom';
function Navbar() {
    const [expandNavBar,setExpandNavBar]=useState(false);
    const location=useLocation();
    useEffect(()=>setExpandNavBar(false),[location]);
    return (  
        <div className='nav-bar' id={expandNavBar?"open":"close"}>
            <div className='toggle-button'>
            <button onClick={()=>setExpandNavBar((prev)=>!prev)}>
             <ReorderIcon/> 
            </button>
         </div>
         <div className='links'>   
         <Link to="/">Home</Link>
         <Link to="/projects">Projects</Link>
         <Link to="/experience">Expereince</Link> 
         </div>
        </div>
    );
}

export default Navbar;