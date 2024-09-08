import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import klara from './assets/klara-teachers.jpg';
import velichko from './assets/velichko.jpg'
import desislava from './assets/desislava.jpg';
import { Helmet } from 'react-helmet';
const Person = () => {
  const {person} = useParams();
  const [current, setCurrent] = useState(0);
  // 0 - not loaded
  // 1 - klara, 2- Desislava, 3 - Velichko
  // 4 - not found

  useEffect(() => {
    if(person.toLowerCase() == 'klara_armandova'.toLowerCase()) {
      setCurrent(1);
    } else if(person.toLowerCase() == 'Deislava_Nikolova'.toLowerCase()) {
      setCurrent(2);
    } else if(person.toLowerCase() == 'Velichko_Rumenchev'.toLowerCase()) {
      setCurrent(3);
    } else {
      setCurrent(4);
    }
  }, []);
  
  return (
    <div className='teacher-info section-space container'>
      
      <Helmet>
        <title>Визион | Преподаватели</title>
      </Helmet>
      <div className="donuts"></div>
      <div className="donuts"></div>
      {
        current == 1 && (
        <div className="person">
          <div className="person-info">
            <h1 className="l-text">
              Клара Армандова
            </h1>
            <p>Основател и Директор на Школа и импресарска къща ВИЗИОН ЕООД</p>
            <p>MA Актьорско майсторство ВИТИЗ</p>
            <p>Магистър по Театър и Педагогика (University of Leeds)</p>
            <p>Доктор на Философските Науки (University of Reading)</p>
            <a href='../public/cv1.doc' download='CV_Klara_Armandova' className="btn btn-hero btn-cv btn-outline">Изтегли CV</a>
          </div>
          <div className="person-img" style={{backgroundColor: '#007cbe'}} >
            <img src={klara} alt="Klara Armandova" />
          </div>
        </div>)
      }
      {
        current == 2 && (
        <div className="person">
           <div className="person-info">
            <h1 className="l-text">
              Десислава Николова
            </h1>
            <p>Завършва държавно Хореогравско Училище отдел класически танци.  </p>
            <p>работи в ДМТ"Стефан Македонски" като артист-балерина,където и до днес участва активно в репертоара на театъра и изпълнява роли в Царицата на Чардаша, Веселата вдовица, Графина Марица, Котки, Моята прекрасна лейди, Чикаго, Мулен Руж, Някой го предпочитат горещо, Евита, Исус Христос супер звезда, Йосиф и неговата пъстра дреха, Зоро и много други. </p>
            
            <a href='../public/cv2.doc' download='CV_Desislava_Nikolova' className="btn btn-hero btn-cv btn-outline">Изтегли CV</a>
          </div>
          <div className="person-img"  style={{backgroundColor: '#00af54'}}>
            <img src={desislava} alt="Desislava Nikolova"/>
          </div>
        </div>)
      }
      {
        current == 3 && (
        <div className="person">
           <div className="person-info">
            <h1 className="l-text">
              Величко Руменчев
            </h1>
            <p>Научно звание:  Проф.дфн  в катедра „Реторика”, Философски факултет на СУ „Св. Климент Охридски” от февруари 1979 г.</p>
            <p>Образование и професионална квалификация:<br/>
- Висше юридическо  - в  Юридически факултет на СУ „Свети Климент Охридски” – 1977 г.<br/>
 - Доктор по  право -  ДИПЛОМА на ВАК <br/> - Професор по реторика - ДИПЛОМА  на ВАК  
</p>
            
            <a href='../public/cv3.doc' download='CV_Velichko_Rumenchev' className="btn btn-hero btn-cv btn-outline">Изтегли CV</a>
          </div>
          <div className="person-img">
            <img src={velichko} alt="Величко Руменчев" />
          </div>
        </div>)
      }
      {
        current == 4 && (
        <div className="person-not-found">
          <h1 className='l-text'>Преподаватлят не е намерен</h1>
          <Link to='/teachers'>
            <button className="btn btn-hero">Върни се</button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Person;