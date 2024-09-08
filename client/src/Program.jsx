import React, {useRef} from 'react';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import programa from './assets/Ptitsi-31.jpg';
import { Link } from 'react-router-dom';
import tick from "./assets/tick.svg";
import tickOrg from "./assets/tick-orange.svg";
import { FaArrowDown } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import programa2 from './assets/programa.png';
import {Helmet} from "react-helmet";

const Program = () => {
  const ref = useRef();

  const scroll = () => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='programmes-page'>
      <Helmet>
        <title>Програми</title>
      </Helmet>
      <div className="first-section section-space container">
        <div className="first-section-info">
          <TypeAnimation
            sequence={[
              100,
              'с нас сте в сигурни ръце',
            ]}
            wrapper="h1"
            className='title'
            speed={180}
            repeat={0}
            cursor={false}
          />
          <motion.p className='text'>
            Нашият трейнинг осигурява освобождаване от напрежението, усвояване и развиване на техники за интерпретация на сцена и пред камера, както и развиване на вокалната техника, комуникационните сръчности и особено – презентаторските умения в условията на публичната реч.
          </motion.p>
          <div className="ticks">
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1, duration:0.5}} className='text'><img className='tick' src={tick} alt="tick" /> Занимания всеки уикенд</motion.p>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4, duration:0.5}} className='text'><img className='tick' src={tick} alt="tick" /> Публични представления</motion.p>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7, duration:0.5}} className='text'><img className='tick' src={tick} alt="tick" /> Гости-лектори и уъркшоп лидери</motion.p>
          </div>
          <div className="btn-container" style={{marginTop: '0rem'}}>
            <Link to='/contact'>
              <button className="btn btn-hero">Свържи се с нас</button>
            </Link>
          <button onClick={scroll} className="btn btn-hero btn-outline">Виж програмите ни <FaArrowDown /></button>
          </div>
        </div>
        <div className="programa-img">
          <img src={programa} alt="Наша постановка" />
        </div>
      </div>
      <main ref={ref} className="section-programmes section-space container">
        <h1 className='title'>Програми <BsStars /></h1>
        <p className='programmes-details text'>Всички програми са дълбоко свързани. Уменията, които развиваме
у участниците зависят от поетапното усвояване на техниките, практиките
и стратегиите, които са в основата на сценичните изкуства <span style={{fontSize: '1.35rem'}}>🎯</span></p>
        <div className="grid">
          <div className="programa" >
            <h1>Актьорско Майсторство</h1>
            <ul>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Кръгове на вниманието и концентрация</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Органика и спонтанност</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Техника на импровизацията</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Работа пред камера</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Чар, “поиз”, творческо вдъхновение – познание и техника</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Театрални стилове</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Commedia del’Arte</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Видове взаимодействия</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Техника на говора и Сценична реч</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Вокална техника</li>
              <li>
            <img className='tick-orange' src={tickOrg} alt="tick" /> Движение и танц</li>
            </ul>
          </div>
          <div className="programa">
            <h1>Сценаристика</h1>
            <ul>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Сюжет и Фабула</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> „Предложени обстоятелства“</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Образи и взаимодействия: „цел“, „динамика“ на отношенията, 5-те „магически въпроса“</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> „драматургичен конфликт“ и динамика</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Структура</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> „Стъпки“ и „Действия“</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Синопсис</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Експликация</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Видове форматиране</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Техники на импровизацията като инструмент за сценариста</li>
            </ul>
          </div>
          <div className="programa">
            <h1>Презентерски Умения</h1>
            <ul>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Видове публични презентации</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Тематика и отправна точка</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Кръгове на вниманието и концентрация</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Риторика (ВР)</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Оптимизиране на PowerPoint презентации</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Позициониране и Акцентиране</li>
            </ul>
          </div>
          <div className="programa">
            <h1>Драматургия и общество</h1>
            <ul>
              <li><img className='tick-orange' src={tickOrg} alt="tick" />  Форми на взаимодействие</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> Контекст и „праксис“</li>
              <li><img className='tick-orange' src={tickOrg} alt="tick" /> От „частен случай“ към „послание“</li>
            </ul>
          </div>
        </div>
      </main>
      <article className='idgaf container section-space'>
        <div className="programa-info-idgaf">
          <h1 className="title">Развийте потенциала си</h1>
          <p className="text">Всеки семестър завършва с публично представление – шоукейс, в който участниците имат шанса да покажат пред публика своите таланти и умения. За всеки участник се изготвя DVD. Тези, които желаят, могат да подготвят материалите си и на чужди езици с експертната помощ на опитни преподаватели, които владеят перфектно още един език. Семестриалните спектакли на ВИЗИОН бяха посрещнати с възторг от публиката, колегите и пресата.
          </p>
          <p className='text' style={{marginTop: '-0.75rem'}}>В процеса на работата ще използвате ‘етюди’ и ‘импровизации’, упражнения и работа върху написан текст. Визион прилага редица съвременни стратегии и методи на работа, като се започне от въведените от майсторите на предишните векове, до модерни методи като този на Майкъл Чехов и методът ПЕМ.</p>
          <Link to='/enroll' className="btn btn-hero">Искам да участвам !</Link>
        </div>
        <div className="programa-img">
          <img loading='lazy' src={programa2} alt="Наша постановка" />
        </div>
      </article>
    </div>
  )
}

export default Program;