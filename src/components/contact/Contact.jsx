import React, { useState, useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const [sendConfirm, setSendConfirm] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9dx8ibh', 'template_sceq62a', form.current, 'kEt26gdXou8PNNKfS')
      .then((result) => {
          console.log(result.text);
          setSendConfirm(true)
      }, (error) => {
          console.log(error.text);
      });

    setTimeout(()=> setSendConfirm(false), 3000)
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Medios para</h5>
      <h2>Contactarme</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>simonjuarezk2@gmail.com</h5>
            <a href="mailto:simonjuarezk2@gmail.com" target="_blank">Enviar un mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Simon Juarez</h5>
            <a href="https://m.me/simon.juarez.14" target="_blank">Enviar un mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+549 2267 538688</h5>
            <a href="https://api.whatsapp.com/send?phone=5492267538688" target="_blank">Enviar un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Nombre completo'/>
          <input type="email" name='email' placeholder='Email'/>
          <textarea name="message" rows="7" placeholder='Su mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
          {
            sendConfirm && <p>Enviado!</p>
          }

        </form>
      </div>
    </section>
  )
}

export default Contact