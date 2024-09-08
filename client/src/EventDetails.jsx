import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import supabase from './CreateClient';
import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import {Helmet} from "react-helmet";

const EventDetails = () => {
  const {id} = useParams();
  const [event, setEvent] = useState();

  const purchase = async() => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URL + '/purchase', {
        body: JSON.stringify({id: id}),
        method: 'POST',
        headers:{
          'Content-Type': 'Application/JSON'
        }
      });
      const data = await response.json();
      if(response.status == 200) {
        console.log(data);
        console.log('yey');
        location.href = data;
      } else {
        throw Error(data.error);
      }
    }catch(err) {
      toast.error(err.message);
    }

  }

  const loadEvent = async() => {
    const {data, error} = await supabase().from('events').select('title, price, image_url, description, date').eq('uuid', id);
    if(error == null) {
      setEvent(data[0]);
    }
  }

  useEffect(() => {
    loadEvent()
  }, []);

  return (
    <div className='event-details-page container section-space'>
      <Helmet>
        <title>Визион | {`${event?.title}`}</title>
      </Helmet>
      <ToastContainer />
      {
        event && (<>
        <div className="event-image">
          <img src={event.image_url} alt="" />
        </div>
          <div className="description-event-page">
            <h1 className='title'>{event.title}</h1>
            <p className="pill">{event.date}</p>
            <div>{parse(event.description)}</div>
            {( event.price != undefined && event.price != 0) && 
            <button onClick={purchase} className="btn btn-purchase">Купи билет - {event.price}лв.</button>}
          </div>
        </>
        )
      }
    </div>
  )
}

export default EventDetails;