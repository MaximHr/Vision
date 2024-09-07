import React, {useRef, useState} from 'react';
import { motion, useInView } from 'framer-motion';
import about_us from './assets/about_us.jpg';
import { Link } from 'react-router-dom';
import stoinov from './assets/stoinov.jpg';
import { IoIosArrowBack } from "react-icons/io";
import liliq from './assets/liliq.webp';
import { RiDoubleQuotesL } from "react-icons/ri";
import qnko from './assets/AlexanderYankulov.jpg';
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
              <li>Актьорско майсторство</li>
              <li>Презентерски умения</li>
              <li>Сценаристика</li>
              <li>Драматургия и общество</li>
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
          <div className="arrow arrow-left" onClick={() => setCurrent(prev => {if(prev > 0) {return prev - 1 } else { return 3}})}>
            <IoIosArrowBack size={35}  />
          </div>
          <div className="arrow arrow-right" onClick={() => setCurrent(prev => {if(prev >= 3) {return 0 } else { return prev + 1}})}>
            <IoIosArrowForward size={35} />
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image" style={{transform: `translateX(${-current * reviewWidth}px )`}}>
              <RiDoubleQuotesL/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth }px )`}}>На школа ВИЗИОН дължа факта, че още на първия кастинг, на който ме изпратиха и на който се явих с монолог,подготвен от ВИЗИОН, ми предложиха роля във филма на Нил Маршъл Hellboy. Щастлива съм, че даже успях да си озвуча текста на английски, благодарение на това, че ВИЗИОН е една от малкото школи в България, които подготвят възпитаниците си на няколко езика - в случая, те ме подготвиха за кастинг на български и на английски.</p>
            <div className="line" style={{transform: `translateX(${-current * reviewWidth}px )`}}></div>
            <p className='name text' style={{transform: `translateX(${-current * reviewWidth}px )`}}>Юлия Давидова</p>
            <p className='job' style={{transform: `translateX(${-current * reviewWidth}px )`}}>Възпитанк на Визион</p>
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image">
              <img src={qnko} alt="" style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}>За мен беше щастие да мина трейнинг по Актьорско майсторство и Презентерски сръчности във ВИЗИОН. Обучението ми помогна изключително много за моите адвокатски пледоарии. Курсът на ВИЗИОН е много приятен, интересен,и полезен не само за бъдещите актьори, но и за всеки човек, който иска да усъвършенства своите комуникационни умения.</p>
            <div className="line" style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}></div>
            <p className='name text'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}>Александър Янкулов</p>
            <p className='job'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth}px )`}}>Възпитанк на Визион</p>
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image">
              <img src={liliq} alt="" style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth + reviewWidth  * 2}px )`}}>Курсът на ВИЗИОН е огромно удоволствие и дава на участниците си преимуществото да развият и усъвършенстват високо ефективни умения в областта на публичната реч.</p>
            <div className="line" style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}></div>
            <p className='name text'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}>Лилия Иванова</p>
            <p className='job'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 2}px )`}}>Възпитанк на Визион</p>
          </div>
          <div className="review">
            <div className="orange-line"></div>
            <div className="name-image">
              <img src={stoinov} alt="" style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 3}px )`}}/>
            </div>
            <p className='opinion' style={{transform: `translateX(${-current * reviewWidth + reviewWidth  * 3}px )`}}>Искам сърдечно да благодаря на един много специален за мен човек, който видя потенциала в мен дори когато никой друг все още не го беше забелязал: това е Клара Армандова, режисьор и педагог. Тя ми даде този заряд да играя и да пиша. Тя ме вдъхнови и научи на всичко, което знам за театъра и за изкуството като цяло.</p>
            <div className="line" style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 3}px )`}}></div>
            <p className='name text'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 3}px )`}}> Александър Стойнов</p>
            <p className='job'  style={{transform: `translateX(${-current * reviewWidth + reviewWidth * 3}px )`}}>Възпитанк на Визион</p>
          </div>
        </div>
        <div className="dots">
          <div onClick={() => setCurrent(0)} className={current == 0 ? "dot current-dot" : "dot"}></div>
          <div onClick={() => setCurrent(1)} className={current == 1 ? "dot current-dot" : "dot"}></div>
          <div onClick={() => setCurrent(2)} className={current == 2 ? "dot current-dot" : "dot"}></div>
          <div onClick={() => setCurrent(3)} className={current == 3 ? "dot current-dot" : "dot"}></div>
        </div>
      </div>
    </div>
  )
}

export default About;