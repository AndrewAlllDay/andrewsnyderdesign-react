import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/hero.jsx';
import { Helmet } from "react-helmet";
import About from '../components/about.jsx';
import Experience from '../components/experience.jsx';
import Footer from '../components/footer.jsx';

const Contact = () => {
    return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Snyder Design</title>
        <link rel="canonical" href="http://andrewsnyderdesign.com" />
      </Helmet>
        <Navbar />

        <Footer />
    </div>
    )
  };
  
  export default Contact;