import React from 'react'
import './header.css'
import ME from '../../assets/FotoFrente_.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <h5>Hola soy</h5>
        <h1>Simón Juarez</h1>
        <h5 classNamee="text-light">Front-end Developer</h5>
        <div className='contact__mail'>
          <a href="#contact" >simonjuarezk2@gmail.com</a>
        </div>
        
        <HeaderSocial />

      </div>
    </header>
  )
}

export default Header