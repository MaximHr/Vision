import React from 'react';
import klara from './assets/klara-teachers.jpg';
import velichko from './assets/velichko.jpg'
import desislava from './assets/desislava.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Teachers = () => {
  return (
    <div className='teachers-page'>
      <Helmet>
        <title>Визион | Преподаватели</title>
      </Helmet>
      <div className="section-teachers section-space container">
        <h1 className='l-text'>Преподаватели</h1>
        {/* <div className="pill">We are the best</div> */}
        <div className="teacher-cards">
          <Link to='Klara_Armandova'>
            <motion.div 
                initial={{y: 250}} 
                animate={{y: 0}} 
                transition={{duration: 0.3, delay:0}} 
                className="teacher-card desislava"
              >
                <div className="teacher-img">
                  <img src={klara} alt="Klara Armandova" />
                </div>
                <div className="teacher-content">
                  <p className="pill">Театър</p>
                  <h1>Клара Армандова</h1>
                  <h3 className="more-teacher">Основател и директор на школа и импресарска къща ВИЗИОН ЕООД</h3>
                </div>
              </motion.div>
            </Link>
            <Link to='Deislava_Nikolova'>
              <motion.div 
                initial={{y: 250}} 
                animate={{y: 0}} 
                transition={{duration: 0.3, delay:0.15, type: 'spring'}} 
                className="teacher-card"
              >
                <div className="teacher-img">
                  <img src={desislava} alt="Klara Armandova" />
                </div>
                <div className="teacher-content">
                  <p className="pill">Танци</p>
                  <h1>Десислава Николова</h1>
                  <h3 className="more-teacher">Хореограф и преподавател по сценично движение</h3>
                </div>
              </motion.div>
            </Link>
            <Link to='Velichko_Rumenchev'>
              <motion.div 
                initial={{y: 250}} 
                animate={{y: 0}} 
                transition={{duration: 0.3, delay:0.3, type: 'spring'}} 
                className="teacher-card velichko"
              >
                <div className="teacher-img">
                  <img src={velichko} alt="Klara Armandova" />
                </div>
                <div className="teacher-content">
                  <p className="pill">Реторика</p>
                  <h1>Величко Руменчев</h1>
                  <h3 className="more-teacher">Проф.дфн  в катедра „Реторика” на СУ „Св. Климент Охридски”</h3>
                </div>
              </motion.div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Teachers;