import './scss/Header.scss'
import React from 'react'
import Logo from '../assets/logo/logo.png'
import mainImg from '../assets/logo/gero.png'
import Arrow from '../assets/arrow2.png'

const Header = () => {
  return (
    <header id="top">
      <img src={ Logo } alt="Formel 1 logo" className="headerLogo" />
      <div className="headerText">
        <h1>Events</h1>
        <div className="headerimg">
          <img src={ mainImg } alt="Formel 1 logo" />
        </div>
        <h1>Travels</h1>
      </div>
      <div className='arrow'>
        <a href="#nav">
          <img src={ Arrow } alt="Arrow pejer ned på website" />
        </a>
      </div>
    </header>
  )
}

export default Header;