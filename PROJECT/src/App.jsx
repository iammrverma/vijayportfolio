import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Contact from './Componants/Contact/Contact'
import Header from './Componants/Header/Header';
import About from './Componants/About/About';
import Home from './Componants/Home/Home';
import Projects from './Componants/Projects/Projects'


const App = () => {
  return(
<div 
style={{overflowX:"hidden"}}>
<Router>
  <Header />
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/aboutus" element={<About />} />
    <Route path="/contactus" element={<Contact />} />

  </Routes>
</Router>
</div>
  );
}

export default App
