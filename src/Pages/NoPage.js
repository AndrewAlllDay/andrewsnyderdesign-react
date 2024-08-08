import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import Nav from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';


const NoPage = () => {
    return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Andrew Snyder Design</title>
        <link rel="canonical" href="http://andrewsnyderdesign.com" />
      </Helmet>
        <Nav />
        <h1>Oops</h1>
        <Footer />
    </div>
    )
  };
  
  export default NoPage;