
import React from 'react'
import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import { Helmet } from "react-helmet";
import About from './components/about.jsx'



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

    </div>
  );
}


export default App;