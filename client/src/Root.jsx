import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import {Helmet} from "react-helmet";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Визион</title>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root;