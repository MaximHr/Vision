import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <nav className='navbar container'>
      <ul>
        <Link to='/' className={pathname == '/' ? 'current' : ''}>Начало</Link>
        <Link to='/about'  className={pathname.includes('/about') ? 'current' : ''}>За Нас</Link>
        <Link className={pathname.includes('/enroll') ? 'current' : ''} to='/enroll'>Кастинг 2024/2025</Link>
        <Link className={pathname.includes('/teachers') ? 'current' : ''} to='/teachers'>Преподаватли</Link>
        <Link className={pathname.includes('/programmes') ? 'current' : ''} to='/programmes'>Програми</Link>
        <Link className={pathname.includes('/events') ? 'current' : ''}  to='/events'>Събития</Link>
        <Link className={pathname.includes('/achievements') ? 'current' : ''}  to='/achievements'>Постижения</Link>
      </ul>
      <Link to='/contact'><button className="btn">Свържи се</button></Link>
    </nav>
  )
}

export default Navbar;