import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const {pathname} = useLocation();
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setToggled(false);
  }, [pathname]);

  return (
    <nav className='navbar container'>
      <ul className='nav-l'>
        <Link to='/' className={pathname == '/' ? 'current' : ''}>Начало</Link>
        <Link to='/about'  className={pathname.includes('/about') ? 'current' : ''}>За Нас</Link>
        <Link className={pathname.includes('/enroll') ? 'current' : ''} to='/enroll'>Кастинг 2024/2025</Link>
        <Link className={pathname.includes('/teachers') ? 'current' : ''} to='/teachers'>Преподаватли</Link>
        <Link className={pathname.includes('/programmes') ? 'current' : ''} to='/programmes'>Програми</Link>
        <Link className={pathname.includes('/events') ? 'current' : ''}  to='/events'>Събития</Link>
        <Link className={pathname.includes('/achievements') ? 'current' : ''}  to='/achievements'>Постижения</Link>
      </ul>
      <Link className='nav-l' to='/contact'><button className="btn">Свържи се</button></Link>

      <Link to='/' className='nav-small'>Визион</Link>
      <div onClick={() => setToggled(!toggled)} className={toggled ? "hamburger toggled-hamburger" : "hamburger"}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className="sidebar"  style={toggled ?  {transform: 'translateX(0)'} : {transform: `translateX(100%)`}}>
        <div className="sidebar-list">
          <>
            <Link to='/' className={pathname == '/' ? 'current' : ''}>Начало</Link>
            <Link to='/about'  className={pathname.includes('/about') ? 'current' : ''}>За Нас</Link>
            <Link className={pathname.includes('/enroll') ? 'current' : ''} to='/enroll'>Кастинг 2024/2025</Link>
            <Link className={pathname.includes('/teachers') ? 'current' : ''} to='/teachers'>Преподаватли</Link>
            <Link className={pathname.includes('/programmes') ? 'current' : ''} to='/programmes'>Програми</Link>
            <Link className={pathname.includes('/events') ? 'current' : ''}  to='/events'>Събития</Link>
            <Link className={pathname.includes('/achievements') ? 'current' : ''}  to='/achievements'>Постижения</Link>
          </>
          <Link to='/contact'><button className="btn">Свържи се</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;