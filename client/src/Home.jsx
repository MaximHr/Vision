import React from 'react';
import pic1 from './assets/pic.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.jpg'
import pic6 from './assets/pic6.jpg'
import pic5 from './assets/pic5.jpg'
import pic7 from './assets/pic7.jpg'
import pic8 from './assets/pic8.jpg'
import pic9 from './assets/pic9.jpg'

const Home = () => {
  return (
    <div className='home container'>
      <article className="info">
      <h1 className='title title-anim'>театрална</h1>
      <h1 className='title title-anim'>школа</h1>
      <h1 className='title'><span className='primary-c'>Визион</span></h1>
        {/* <p className='text'>Най-ценното откритие е да намериш необикновеното в обикновеното!</p> */}
        {/* <div className="btn-container">
          <button className="btn">Запиши се</button>
          <button className="btn">Научи Повече</button>
        </div> */}
      </article>
      <div className="images-container">
        <div className="row">
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
        <div className="row">
          <div className="img-container">
            <img src={pic6} alt="Упражнение" />
          </div>
          <div className="img-container">
            <img src={pic5} alt="Упражнение" />
          </div>
          <div className="img-container">
            <img src={pic8} alt="Упражнение" />
          </div>
        </div>
        <div className="row">
          <div className="img-container">
            <img src={pic3} alt="Упражнение" />
          </div>
          <div className="img-container">
            <img style={{transform: 'translateY(-35px)'}} src={pic4} alt="Упражнение" />
          </div>
          <div className="img-container">
            <img  style={{transform: 'translateY(-45px)'}} src={pic9} alt="Упражнение" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;