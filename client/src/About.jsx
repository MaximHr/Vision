import React, {useRef, useState} from 'react';
import { motion, useInView } from 'framer-motion';
import about_us from './assets/about_us.jpg';
import { Link } from 'react-router-dom';
import klara from './assets/pic6.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  const ref = useRef(null);
  const [reviewWidth, setReviewWidth] = useState(860)
  const [current, setCurrent] = useState(0);
  const isInView = useInView(ref, {
    margin: '0px 32px 0px 32px',
    once: true
  })

  return (
    <div className='about-page'>
      <div className="about-us container section-space">
        <motion.div initial={{x: -150, scale: 0}}  animate={{scale: 1}} transition={{duration: 0.4, delay: 0.1}} className="circle"></motion.div>
        <article  >
          <h1 className='l-text'>За нас</h1>
          <p className='text'>10 успешни години за ВИЗИОН отвориха вратите на много от възпитаниците на школата към професионалната филмова индустрия, шоу бизнеса и презентаторството.</p>
          <div className="btn-container" style={{marginTop: 0}}>
            <Link to='/enroll'>
              <button className="special-btn"><span>Участвай</span></button>
            </Link>
            <Link to='/contact'>
              <button className="special-btn scale-more"><span>Свържи се</span></button>
            </Link>
          </div>
        </article>
        <div className='img-about-us'>
          <img src={about_us} height='270px' alt="Възпитаниците ни" />
        </div>
      </div>
      <div className="our-story section-space container">
          <div className="circle-3"></div>
          <div className="circle-2"></div>
          <div className="circle-1"></div>
          <div className="circle-6"></div>
          <div className="circle-5"></div>
          <div className="circle-4"></div>
        <h1 className="l-text">Нашата История</h1>
        <p className='text'>Школа и импресарска къща ВИЗИОН е основана през септември 2014 г. от известната българска актриса Клара Армандова, любимка на публиката от телевизионната серия за деца „Приказки с шапки“, от редица постановки на театър „Сълза и смях“, театър „София“, театър 199, кафе-театри в София, и филмите „Рицарят на бялата дама“, „Бъди благословена“. Понастоящем, преподавателите във ВИЗИОН са трима висококвалифицирани и опитни специалисти, а също се канят гости-лектори и уъркшоп лидери.</p>
        <div className="boxes" ref={ref}>
          <div className="box" style={isInView ? {opacity: 1} : {opacity: 0}}>
            <h2>Рзбери как да участваш</h2>
            <p>Организираме прослушвания за участници за есенния семестър. Обади ни се, за да запазиш своето място.</p>
            <Link to='/enroll'>
              <button className="btn">Кастинг</button>
            </Link>
          </div>
          <div className="box"  style={isInView ? {opacity: 1} : {opacity: 0}}>
            <h2>Виж какво ще научиш</h2>
            <ul>
              <li>Курсове по Актьорско майсторство и Театрално изкуство</li>
              <li>Уроци и Курсове по Режисура и сценарий</li>
            </ul>
            <Link to='/programmes'>
              <button className="btn">Програми</button>
            </Link>
          </div>
          <div className="box"  style={isInView ? {opacity: 1} : {opacity: 0}}>
            <h2>Опознай нашите преподаватели</h2>
            <ul>
              <li>Клара Армандова</li>
              <li>Десислава Николова</li>
              <li>Величко Димитров Руменчев</li>
            </ul>
            <Link to='/teachers'>
              <button className="btn">Преподаватели</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="testimony container section-space">
        <h1 className='l-text'>Какво мислят хората за нас</h1>
        <div className="review-container">
          <div className="arrow arrow-left" onClick={() => setCurrent(prev => {if(prev > 0) {return prev - 1 } else { return 2}})}>
            <IoIosArrowBack size={35}  />
          </div>
          <div className="arrow arrow-right" onClick={() => setCurrent(prev => {if(prev >= 2) {return 0 } else { return prev + 1}})}>
            <IoIosArrowForward size={35} />
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image">
              <img src={klara} alt="" style={{transform: `translateX(${-current * reviewWidth}px )`}}/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth }px )`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis assumenda, cupiditate, vitae quisquam, qui recusandae corrupti laboriosam maiores ex deleniti ipsa ut voluptates placeat ea nulla harum sed numquam aliquid quidem nihil dolores illo exercitationem iusto. Voluptate ut quaerat veritatis ipsum reprehenderit debitis eum, quia iusto modi magnam soluta fugit dolorum tempora eveniet beatae, quos consequuntur, deleniti pariatur asperiores.</p>
            <div className="line"></div>
            <p className='name text' style={{transform: `translateX(${-current * reviewWidth}px )`}}>Иван Петров</p>
            <p className='job' style={{transform: `translateX(${-current * reviewWidth}px )`}}>Възпитанк на Визион</p>
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image">
              <img src={klara} alt="" style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis assumenda, cupiditate, vitae quisquam, qui recusandae corrupti laboriosam maiores ex deleniti ipsa ut voluptates placeat ea nulla harum sed numquam aliquid quidem nihil dolores illo exercitationem iusto. Voluptate ut quaerat veritatis ipsum reprehenderit debitis eum, quia iusto modi magnam soluta fugit dolorum tempora eveniet beatae, quos consequuntur, deleniti pariatur asperiores.</p>
            <div className="line"></div>
            <p className='name text'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}>Иван Петров</p>
            <p className='job'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}>Възпитанк на Визион</p>
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image">
              <img src={klara} alt="" style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth + reviewWidth  * 2}px )`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis assumenda, cupiditate, vitae quisquam, qui recusandae corrupti laboriosam maiores ex deleniti ipsa ut voluptates placeat ea nulla harum sed numquam aliquid quidem nihil dolores illo exercitationem iusto. Voluptate ut quaerat veritatis ipsum reprehenderit debitis eum, quia iusto modi magnam soluta fugit dolorum tempora eveniet beatae, quos consequuntur, deleniti pariatur asperiores.</p>
            <div className="line"></div>
            <p className='name text'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}>Иван Петров</p>
            <p className='job'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}>Възпитанк на Визион</p>
          </div>
        </div>
        <div className="dots">
          <div onClick={() => setCurrent(0)} className={current == 0 ? "dot current-dot" : "dot"}></div>
          <div onClick={() => setCurrent(1)} className={current == 1 ? "dot current-dot" : "dot"}></div>
          <div onClick={() => setCurrent(2)} className={current == 2 ? "dot current-dot" : "dot"}></div>
        </div>
      </div>
    </div>
  )
}

export default About;