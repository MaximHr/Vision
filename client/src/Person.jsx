import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import klara from './assets/klara-teachers.jpg';
import velichko from './assets/velichko.jpg'
import desislava from './assets/desislava.jpg';

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
      <div className="donuts"></div>
      <div className="donuts"></div>
      {
        current == 1 && (
        <div className="person">
          <div className="person-info">
            <h1 className="l-text">
              Клара Армандова
            </h1>
            <p>Amsterdam-based jeanmaker Denham believe in taking care of the finest details. From every roll of premium denim to every stitch of their jeans, it’s the small details that make their jeans renowned around the world.</p>
            <p>Their e-commerce business is no different and after careful consideration Denham decided they wanted an improvement on their Salesforce Commerce Cloud website. The SFCC platform couldn’t give them the precision and the detail they were looking for.</p>
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
            <p>Amsterdam-based jeanmaker Denham believe in taking care of the finest details. From every roll of premium denim to every stitch of their jeans, it’s the small details that make their jeans renowned around the world.</p>
            <p>Their e-commerce business is no different and after careful consideration Denham decided they wanted an improvement on their Salesforce Commerce Cloud website. The SFCC platform couldn’t give them the precision and the detail they were looking for.</p>
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
            <p>Amsterdam-based jeanmaker Denham believe in taking care of the finest details. From every roll of premium denim to every stitch of their jeans, it’s the small details that make their jeans renowned around the world.</p>
            <p>Their e-commerce business is no different and after careful consideration Denham decided they wanted an improvement on their Salesforce Commerce Cloud website. The SFCC platform couldn’t give them the precision and the detail they were looking for.</p>
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