import React, { useState } from 'react'
import hamburgerIcon from '../images/hamburger.svg'
import '../css/header.css'

const Header = () => {
    // state to toggle mobile menu expanded or not
    const [closed, setClosed] = useState(true)
    const handleClick = () => setClosed(!closed)
    

  return (
    <nav className='headerNav'>
      <ul className={closed?'headerUl closed':'headerUl'}>
        <li className='headerLi'><a href="">link 1</a></li>
        <li className='headerLi'><a href="">link 2</a></li>
        <li className='headerLi'><a href="">link 3</a></li>
      </ul>
      <a className='headerIcon' onClick={handleClick}>
        <img src={hamburgerIcon} alt="" />  
      </a>      
    </nav>
  )
}

export default Header