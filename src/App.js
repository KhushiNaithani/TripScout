import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import Run from "./config/gemini"
import axios from "axios";

import Nav from './components/Nav';
import TravelPlanner from './components/TravelPlanner'; 
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";




import "./styles/App.css";
import "./styles/TravelPlanner.css";
import "./styles/Nav.css";
import "./styles/Home.css";
import "./styles/Contact.css";
import "./styles/About.css";



function App(){

  return(
    <>
        <Router>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/travel-planner" element={<TravelPlanner/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
    </>

  )
}
export default App;