import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if(name.trim() == '' || email.trim() == '' || phone.trim() == '' || message.trim() == '') { 
      toast.error('Моля попълнете всички полета');
    } else {
      console.log(name, email, phone, message);
      setLoading(true);
    }
  }
  return (
    <div className="contacts">
      <ToastContainer />
      <div className='contact-page section-space container'>
        <div className="contact-info">
          <h1 className='title'>Свържете се с нас</h1>
          <p className='text'>Имате въпроси или искате да се запишете за нашата школа? Ще се радваме да Ви чуем.</p>
          <form className='form' onSubmit={(e) => submitForm(e)}>
            <div>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Въведете Вашето име'/>

              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Имейл адрес'/>
            </div>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Телефонен номер'/>

            <textarea placeholder='Вашето съобщение' className='text-area' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button disabled={loading} type='submit' className='btn-submit'>Изпрати</button>
          </form>
        </div>
        <div className="contact-box">
          <div className="room">
            <h2><FaPhoneAlt size={24}/> Обади ни се</h2>
            <p>+359 87 7769702</p>
            <p>+359 87 9163763</p>
          </div>
          <div className="room">
            <h2><MdEmail size={27}/>Имейл адрес</h2>
            <p>clareinfo@aol.com</p>
            <p>vizion15@abv.bg</p>
          </div>
          <div className="room">
            <h2><FaLocationDot size={26}/> Местоположение</h2>
            <p>ул. ``Цар Асен`` 80, София, България</p>
          </div>
          <div className="room">
            <h2><FaPaperPlane size={25}/> Социални мрежи</h2>
            <a className='social' target='_blank' href='https://www.facebook.com/profile.php?id=61564477900686'>фейсбук</a>
            <a className='social' target='_blank' href='https://uchiteli.bg/profile/klara/106825'>учители.бг</a>
          </div>
        </div>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11305.142455511927!2d23.308775024695958!3d42.68892781291713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8511bc18b3a1%3A0xda956fb4985117e8!2sSofia%20Center%2C%20ul.%20%22Tsar%20Asen%22%2080%2C%201463%20Sofia!5e0!3m2!1sen!2sbg!4v1725119665635!5m2!1sen!2sbg" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact;