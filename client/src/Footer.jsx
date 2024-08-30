import React from 'react';
import {useLocation} from 'react-router-dom';

const Footer = () => {
  const {pathname} = useLocation();
  
  return (
    <footer className='footer container' style={pathname.includes('about') ? {borderTop: '1px solid #b3b3b3'} : {}}>
      <p><span className='italic'>ВИЗИОН</span> 2024 | Всички права са запазени</p>
    </footer>
  )
}

export default Footer;