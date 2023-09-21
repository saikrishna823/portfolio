import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from "./components/Footer"
import Contact from './components/Contact';
function App() {
  return (
     <Router className="app">
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
       <Footer/>
     </Router>
  );
}

export default App;
