import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div className='section-space container notfound-page'>
      
      <Helmet>
        <title>Визион | 404</title>
      </Helmet>
      <h1 className=" not-found">404</h1>
      <p className="text">Страницата не беше намерена. </p>
      <Link to='/' className="btn btn-hero" style={{padding: '1rem 2rem'}}>Начало</Link>
    </div>
  )
}

export default NotFound;