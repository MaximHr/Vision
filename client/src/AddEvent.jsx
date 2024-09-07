import React, { useEffect, useState } from 'react';
import supabase from './CreateClient';
import { useNavigate } from 'react-router-dom';
import { TextField, Flex, Text, Button } from "@radix-ui/themes";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import Card from './Card';


const AddEvent = () => {
  const [user, setUser] = useState();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState();
  const [image, setImage] = useState('');
  const [subTitle, setSubTitle] = useState('');

  const navigate = useNavigate();

  const uploadImage = async(e) => {
    const file = e.target.files[0];
		const formData = new FormData();
    formData.append("image", file);
		try {
			const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID " + import.meta.env.VITE_APP_IMGUR_ID,
          Accept: "application/json",
        },
        body: formData
      });      
      const data = await response.json();  
			if(data.status === 200) {
				setImage(data.data.link)
        toast.success('Image uploaded');
			} else {
        throw Error(data.data.error);
      }

		}catch(err) {
      console.log(err);
			toast.error(err.message, {
				autoClose: 2500,
				position: 'top-center'
			});
		}
  }

  const getUser = async() => {
    const { data } = await supabase().auth.getUser();
    if(data.user != null) {
      setUser(data.user);
    } else {
      console.log('ehoo');
      navigate('/admin')
    }
  }
  useEffect(() => {
    getUser();
  }, []); 

  const submit = async() => {
    const { error } = await supabase()
    .from('events')
    .insert({ title: title, description: details, date: date, price: price, image_url: image, subtitle: subTitle })

    if(error == null) {
      navigate('/admin/home');
    }
  }

  return (
    <Flex direction='column' gap='5'>
      <ToastContainer />
      {user && <Flex direction='column' align='start' className='section-space container admin-page'>
        <Flex align='center' gap='9'>
          <Text size='8'>Добавяне на събитие</Text> 
          <Link to='/admin/home'><Button size='3'>Назад</Button></Link>
        </Flex> 
        <Flex direction='column' mt='8' gap='4'>
          <Text size='5'>Заглавие</Text>
          <TextField.Root 
            type='text' 
            placeholder='Заглавие'
            style={{width: '450px', height: '35px'}}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField.Root>
        </Flex>
        <Flex direction='column' mt='8' gap='4'>
          <Text size='5'>Цена на билет</Text>
          <Text size='3'>(Ако го оставиш на 0 или празно, няма да има опция за купуване на билет)</Text>
          <TextField.Root 
            type='number' 
            placeholder='Цена'
            style={{width: '450px', height: '35px'}}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></TextField.Root>
        </Flex>
        
        <Flex direction='column' mt='8' gap='4'>
          <Text size='5'>Дата на събитието</Text>
          <TextField.Root 
            type='date' 
            style={{maxWidth: '450px', height: '35px'}}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></TextField.Root>
        </Flex>
        <Flex direction='column' mt='8' gap='4'>
          <Text size='5'>Подробна информация</Text>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={details}
            onChange={setDetails}
            placeholder={"Напиши повече информация за събитието"}
            modules={modules}
            formats={formats}
          />
        </Flex>
        <Flex direction='column' mt='8' gap='4'>
          <Text size='5'>Прикачи снимка</Text>
          <TextField.Root 
            type='file' 
            style={{maxWidth: '450px', height: '35px'}}
						onChange={(e) => uploadImage(e)}
					  accept="image/*"  
          >Файл</TextField.Root>
        </Flex>
        <Flex direction='column' mt='8' gap='4'>
          <Text size='5'>Подзаглавие</Text>
          <TextField.Root 
            type='text' 
            style={{width: '450px', height: '35px'}}
            value={subTitle}
            placeholder='кратко подзаглавие'
            onChange={(e) => setSubTitle(e.target.value)}
          ></TextField.Root>
        </Flex>
        
        <div style={{pointerEvents: 'none', marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
          <Card event={{subtitle: subTitle, date:date, price: price, title: title, image_url: image}}/>
        </div>
        <Button 
          mt='9' 
          size='4' 
          onClick={submit}>Публикувай
        </Button>
    </Flex>}
    </Flex>
  )
}

export default AddEvent;