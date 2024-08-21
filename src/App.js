import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Menu from './Projects/Menu/Menu';
import RetainBanner from './Projects/Retain Branding/Retain'
import NoPage from './Pages/NoPage';




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/menu" element={<Menu />} />
          <Route path="/work/retain-banner" element={<RetainBanner />} />
          <Route path="*" element={<NoPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;