import React from 'react'
import { useState } from 'react'
import HamburgerButton_Animated from './HamburgerButton_Animated'
import '../css/header.css'

const Header = () => {

    // state to toggle mobile menu expanded or not
    const [closed, setClosed] = useState(true)
    const handleClick = () => setClosed(!closed)

    return (
        <nav className='headerNav'>     
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <HamburgerButton_Animated menuClosed={closed} menuToggleHandler={handleClick}/>
                <div style={{marginRight: "10px"}}>someLogo</div>
            </div>       
            <ul className={closed?'headerUl closed':'headerUl'}>
                <li className='headerLi'><a href="">Home</a></li>
                <li className='headerLi'><a href="">About</a></li>
                <li className='headerLi'><a href="">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Header