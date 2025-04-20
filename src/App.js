import React from "react";
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/about" element={ <About />} />
      </Routes>  
       

    </BrowserRouter>
    
  );
}

export default App; 