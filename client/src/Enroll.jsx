import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Enroll = () => {
  return (
    <div className="register-me">
      <div className='enroll-page section-space container'>
        <motion.div initial={{x: 150, y:-150, scale: 0}} animate={{ scale: 1}} transition={{ delay:0.1, duration: 0.4}} className="random-svg"></motion.div>
        <div className="pill">Есенен Семестър</div>
        <h1 className='l-text'>Приемът е отворен !</h1>
        <p className="text text-terms">Школата работи целогодишно, като учебната година е разделена на 2 семестъра – Есенен (от 1 октомври до 20 декември), и Пролетен (от 1 март до 15 юли). Две възрастови групи: 14 – 18, и 18+ без горна възрастова граница. Заниманията се провеждат в събота и в неделя от 11 до 13 ч., както и по договорка, в студиото на ВИЗИОН в центъра на София, където атмосферата е изключително светла и дружелюбна. </p>
        <div className="steps">
          <div className="dash-line"></div>
          <article className="step">
            <h3>1. Избери Програма</h3>
            <ul>
              <li>Актьорско майсторство</li>
              <li>Презентерски умения</li>
              <li>Сценаристика</li>
              <li>Драматургия и общество</li>
            </ul>
            <Link to='/programmes' className="btn">Виж програмите ни</Link>
          </article>
          <article className="step">
            <h3>2. Обади ни се</h3>
            <p>Звънни ни, за да запазиш своето място в школата и за да се опознаем</p>
            <Link to='/contact' className="btn">Контакти</Link>
          </article>
          <article className="step">
            <h3>3. Започни при нас</h3>
            <p>Ела и преоткрий себе си. Няма да останеш разочарован !</p>
            <Link to='/achievements' className="btn">Нашите постижения</Link>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Enroll;