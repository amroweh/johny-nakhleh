import React from 'react'
import { useState } from 'react'
import HamburgerButton_Animated from './HamburgerButton_Animated'
import '../css/header2.css'

const Header2 = () => {

    // state to toggle mobile menu expanded or not
    const [closed, setClosed] = useState(true)
    const handleClick = () => setClosed(!closed)

    return (
        <nav className='headerNav'>            
            <HamburgerButton_Animated menuClosed={closed} menuToggleHandler={handleClick}/>
            <ul className={closed?'headerUl closed':'headerUl'}>
                <li className='headerLi'><a href="">Home</a></li>
                <li className='headerLi'><a href="">About</a></li>
                <li className='headerLi'><a href="">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Header2