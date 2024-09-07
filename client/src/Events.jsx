import React, { useEffect, useState } from 'react';
import supabase from './CreateClient';
import Card from './Card';

const Events = () => {
  const [events, setEvents] = useState([]);
  const loadEvents = async() => {
    const {data, error} = await supabase()
      .from('events')
      .select('uuid, title, image_url, date, subtitle')
      .order('id', { ascending: false })
    if(error == null) {
      setEvents(data);
    } 
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className='events-page container section-space'>
      <h1 className='l-text'>Събития</h1>
      <div className="event-grid">
        {events.map(event => <Card key={event.uuid} event={event}/>)}
      </div>
    </div>
  )
}

export default Events;