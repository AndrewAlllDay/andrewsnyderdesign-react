import React from 'react'

import { Helmet } from "react-helmet";
import Nav from '../../components/Navbar.jsx'
import Footer from '../../components/footer.jsx';
import Projectheader from './Components/projectheader.jsx';
import Projectimages from './Components/projectimages.jsx';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project | Carlo's Trattoria Menu</title>
        <link rel="canonical" href="http://andrewsnyderdesign.com/projects/menu" />
      </Helmet>
      <Nav />
      <Projectheader />
      <Projectimages />
      <Footer />
    </div>
  )
};

export default Menu;