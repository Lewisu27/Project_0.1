import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Hobbies from './component/Hobbies';
import Education from './component/Education';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Hobbies" element={<Hobbies />} /> 
        <Route path="/Education" element={<Education />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </Router>
     
  );
}

export default App;
