
import React from 'react'
import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import { Helmet } from "react-helmet";
import About from './components/about.jsx'
import Experience from './components/experience.jsx';
import Footer from './components/footer.jsx';


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Snyder Design</title>
        <link rel="canonical" href="http://andrewsnyderdesign.com" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}


export default App;