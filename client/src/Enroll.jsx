import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Enroll = () => {
  return (
    <div className='enroll-page section-space container'>
      <motion.div initial={{x: 150, y:-150, scale: 0}} animate={{ scale: 1}} transition={{ delay:0.1, duration: 0.4}} className="random-svg"></motion.div>
      <div className="pill">Есенен Семестър</div>
      <h1 className='l-text'>Приемът е отворен !</h1>
      <div className="steps">
        <div className="dash-line"></div>
        <article className="step">
          <h3>1. Избери Програма</h3>
          <ul>
            <li>Актьорско майсторство</li>
            <li>Сценаристика и Режисура</li>
          </ul>
          <Link to='/programmes' className="btn">Виж програмите ни</Link>
        </article>
        <article className="step">
          <h3>2. Обади ни се</h3>
          <p>Звънни ни, за да запазиш своето място в школата и за да се опознаем</p>
          <Link to='/programmes' className="btn">Контакти</Link>
        </article>
        <article className="step">
          <h3>3. Започни при нас</h3>
          <p>Ела и преоткрий себе си !</p>
          <Link to='/programmes' className="btn">Нашите постижения</Link>
        </article>
      </div>
    </div>
  )
}

export default Enroll;