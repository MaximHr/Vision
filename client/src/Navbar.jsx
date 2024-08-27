import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar container'>
      <ul>
        <Link to='/'>Начало</Link>
        <Link to='/'>За Нас</Link>
        <Link to='/'>Кастинг 2024/2025</Link>
        <Link to='/'>Преподаватли</Link>
        <Link to='/'>Събития</Link>
        <Link to='/'>Галерия</Link>
      </ul>
      <button className="btn">Купи билети</button>
    </nav>
  )
}

export default Navbar;