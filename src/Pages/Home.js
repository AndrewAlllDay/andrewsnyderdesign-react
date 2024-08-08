import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/hero.jsx';
import { Helmet } from "react-helmet";
import About from '../components/about.jsx';
import Experience from '../components/experience.jsx';
import Footer from '../components/footer.jsx';
import Work from '../components/work.jsx';

const Home = () => {
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
      <Work />
      <Footer />
    </div>
  )
};

export default Home;