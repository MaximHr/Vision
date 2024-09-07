import React, { useEffect, useState } from 'react';
import supabase from './CreateClient';
import { useNavigate } from 'react-router-dom';
import { AlertDialog, Flex, Text, Button } from "@radix-ui/themes";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Admin = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [events, setEvents] = useState();

  const getUser = async() => {
    const { data } = await supabase().auth.getUser();
    if(data.user != null) {
      setUser(data.user);
      getEvents();
    } else {
      console.log('ehoo');
      navigate('/admin')
    }
  }
  const getEvents = async() => {
    const {data, error} = await supabase()
      .from('events')
      .select('id, date, title, image_url')
      .order('id', { ascending: false });
    if(error == null) {
      setEvents(data);
    }
  }
  const deleteEvent = async(id) => {
    const {error} = await supabase()
      .from('events')
      .delete()
      .eq('id', id);
     
    if(error == null) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== id)
      );
      toast.success('Събитието беше изтрито успешно.')
    }

  }

  useEffect(() => {
    getUser();
  }, []); 
  return (
    <Flex direction='column'>
      <ToastContainer />
      {user && <div className='section-space container admin-page'>
        <Flex align='center' gap='9'>
          <Text size='8'>Събития</Text> 
          <Link to='/admin/add-event'><Button size='3'>Добави събитие</Button></Link>
        </Flex> 
        <div className="events-admin">
          {
            events?.map((event) => {
              return(
                <Flex direction='column' gap='4' className="event-list" key={event.id}>
                  <div className="event-list-img">
                    <img src={event.image_url}/>

                  </div>
                  <Text size='5'>{event.title}</Text>
                  <Text size='5'>{event.date}</Text>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button color="red" size='3'>Изтрий</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="450px">
                      <AlertDialog.Title>Изтрий събитие</AlertDialog.Title>
                      <AlertDialog.Description size="3">
                        Сигурни ли сте? Веднъж изтрита, статията не може да се върне
                      </AlertDialog.Description>

                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action onClick={() => deleteEvent(event.id)}>
                          <Button variant="solid" color="red">
                            Изтрий
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                </Flex>
              )
            })
          }
        </div>
      </div>}
    </Flex>
  )
}

export default Admin;