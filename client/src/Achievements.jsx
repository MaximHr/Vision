import React, {useRef} from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player/youtube';
import { useInView } from 'framer-motion';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <div className='achievements'>
      <Helmet>
        <title>Визион | Постижения</title>
      </Helmet>
      <div className="achievements-page container" >
        <div className="stripes">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
        <div className="video-container">
          <ReactPlayer url='https://www.youtube.com/watch?v=iw2CMYPIdmk' 
            className='youtube-video' light  playing controls/>
        </div>
        <div className="achievements-section">
          <h1 className="l-text">Постижения🏆</h1>
          <p className="text"> Школа ВИЗИОН е както за тези, които искат да се посветят на театъра и киното, така и за тези, които желаят да развият презентерските си и комуникационните сръчности. Екипът ни от професионалисти преподаватели - режисьори, продуценти, хореографи, е фантастичен. Гордеем се с нашите възпитаници, които през последните 10 години доказаха своите умения във всички сфери на живота.</p>
        </div>
      </div>
      <div className="achievements-flex container">
        <div className="stripes">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
        <div className="video-container">
          <ReactPlayer url='https://www.youtube.com/watch?v=d0oR6ScZBiE' 
            className='youtube-video' light  playing controls/>
        </div>
        
      <div className="medals">
        <p className='text' style={isInView ? {opacity: 1} : {opacity: 0}}><div className="medal" ref={ref}>🎖️</div> Юлия Давидова (Джулия Дейвид), Пламен Христов и Мина Тоткова вече снимат в телевизионни сериали и международни филмови копродукции;</p>
        <p style={isInView ? {opacity: 1} : {opacity: 0}} className='text'><div className="medal">🎖️</div> Лилия Иванова, Александър Янкулов и Нина Цифудина усъвършенстваха своите сръчности в областта на публичната реч
        и работят за едни от най-реномираните адвокатски като Kinstellar и др.</p>
        <p  style={isInView ? {opacity: 1} : {opacity: 0}}className='text'><div className="medal">🎖️</div> Александър Стойнов, на 18 години, издаде първата си книга със съдържаща седем едноактни пиеси, които
        бяха построени и експериментирани с участието на поканени от ВИЗИОН актьори.</p>
      </div>
      </div>
    </div>
  )
}

export default Achievements;