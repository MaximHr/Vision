import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({event}) => {
  return (
    <div className='event'>
      <div className="event-img">
        <img src={event.image_url} alt="" />
      </div>
      <div className="event-info">
        {
          event.date != undefined && <p className='event-date'>{event.date}</p>
        }
        <h1 className='event-title'>{event.title}</h1>
        <p className='event-short-text'>{event.subtitle}</p>
        <Link to={event.uuid} className="btn">Прочети повече</Link>
      </div>
    </div>
  )
}

export default Card;