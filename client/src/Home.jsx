import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import pic1 from './assets/pic.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.jpg'
import pic6 from './assets/pic6.jpg'
import pic5 from './assets/pic5.jpg'
import pic7 from './assets/pic7.jpg'
import pic8 from './assets/pic8.jpg'
import pic9 from './assets/pic9.jpg';
import blob from './assets/blob.svg'
import video from './assets/video_dancing.mp4'
import poster from './assets/tarifata.png';
import drama from './assets/drama.svg'
import cinema from './assets/cinema.svg'

const Home = () => {

  return (
    <div className="landing">
      <div className='home container section-space'>
        <article className="info">
          <img className='blob' src={blob} alt="svg circle" />
          <h1 className='title' style={{color: 'rgb(255, 91, 53)'}}>Визион</h1>
          <h1 className='title title-anim'>Театрална школа <span style={{textTransform: 'lowercase', marginLeft: '3px', fontWeight: '500', fontFamily: 'Playground Fair'}}>и</span></h1>
          <h1 className='title title-anim'>Импресарска къща</h1>
          <p className='text'>Мисията на театралното изкуство е да кара хората да мислят🤔, да променя<span style={{fontSize: '1.4rem'}}>🎭</span>, и да забавлява😂</p>
          <div className="btn-container">
            <Link to='/enroll'>
              <button className="btn btn-hero">Запиши се</button>
            </Link>
            <Link to='/about'>
              <button className="btn btn-hero btn-outline">Научи повече</button>
            </Link>
          </div>
          
        </article>
        <div className="images-container">
          <div className="row"  >
            <div className="img-container">
              <img src={pic1} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic2} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic7} alt="Упражнение" />
            </div>
          </div>
          <div 
            className="row" 
          >
            <div className="img-container">
              <img src={pic6} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic3} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic8} alt="Упражнение" />
            </div>
          </div>
          <div className="row">
            <div className="img-container" >
              <img src={pic4} alt="Упражнение"  style={{transform: 'translateY(-40px)'}} />
            </div>
            <div className="img-container">
              <img src={pic5} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img  style={{transform: 'translateY(-45px)'}} src={pic9} alt="Упражнение" />
            </div>
          </div>
        </div>
        <div className="marque">
          <Marquee speed={200} pauseOnHover={true}>
            
            <div className="img-container">
              <img src={pic1} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic2} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic7} alt="Упражнение" />
            </div>
            
            <div className="img-container">
              <img src={pic6} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic3} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img src={pic8} alt="Упражнение" />
            </div>
            <div className="img-container" >
              <img src={pic4} alt="Упражнение"  style={{transform: 'translateY(-40px)'}} />
            </div>
            <div className="img-container">
              <img src={pic5} alt="Упражнение" />
            </div>
            <div className="img-container">
              <img  style={{transform: 'translateY(-45px)'}} src={pic9} alt="Упражнение" />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="section-home container section-space">
          <div className="stripes">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
        <div className="video"> 
          <video preload="none" poster={poster} load='lazy' controls src={video} type="video/mp4"></video>
        </div>
        <article className="section-details">
          <h1>Станете част от Визион</h1>
          <p>Миналата година ВИЗИОН навърши 10 години от началото на своята дейност. Наши възпитаници са вече навсякъде: на сцената, на телевизионния екран, и в най-новите български филми и международни копродукции. </p>
          <Link to='/enroll'>
            <button className="btn ">Искам да участвам !</button>
          </Link>
        </article>
      </div>
      <div className="action-section container section-space">
        <img className='floating-svg' src={drama} alt="drama masks" />
        <img className='floating-svg' src={cinema} alt="camera" />
        <h1 className="l-text">Сцената Ви очаква !</h1>
        <p className="text">Искате да играете на сцена и пред камера? Искате да влизате от образ в образ и да покажете на хората как да направят живота си по-добър с помощта на изкуството? Интересувате се от мотивите зад действията на хората и искате да станете по-уверени в общуването си с другите хора? Ако отговрът на тези въппроси Ви е 'ДА', то курсовете, които провежда Визион са точно за Вас!</p>
        <div className="btn-container">
          <Link to='/programmes'><button className="btn">Нашите програми</button></Link>
          <Link to='/about'><button className="btn btn-outline">Научи повече</button></Link>
        </div>
      </div>
    </div>

  )
}

export default Home;