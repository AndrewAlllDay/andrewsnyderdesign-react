
import React from 'react'
import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import {Helmet} from "react-helmet";



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
    </div>
  );
}


export default App;