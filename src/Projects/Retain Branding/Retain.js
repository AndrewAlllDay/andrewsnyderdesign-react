import React from 'react'

import { Helmet } from "react-helmet";
import Nav from '../../components/Navbar.jsx'
import Footer from '../../components/footer.jsx';
import Projectheader from './Components/projectheader.jsx';
import BackButton from '../../components/backbutton.jsx';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project | Retain Branding</title>
        <link rel="canonical" href="http://andrewsnyderdesign.com" />
      </Helmet>
      <Nav />
      <BackButton />
      <Projectheader />
      <Footer />
    </div>
  )
};

export default Menu;