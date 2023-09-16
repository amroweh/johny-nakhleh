import React from 'react'
import { useState } from 'react'
import { StyledNavMenuLogoSection, StyledHamburgerBar, StyledHamburgerBarContainer, StyledNavMenuTopSection, StyledNavMenuContentSection_a, StyledNavMenuContentSection_li, StyledNavMenuContentSection, StyledNavMenu } from './styled/Header.styled'

const Header = ({topHeight}) => {

    // state to toggle mobile menu expanded or not
    const [closed, setClosed] = useState(true)
    const handleClick = () => setClosed(!closed)

    return (
        <StyledNavMenu>
            <StyledNavMenuTopSection>
                <StyledHamburgerBarContainer topHeight={topHeight} onClick={handleClick}>
                    <StyledHamburgerBar topHeight={topHeight} className={closed||"change1"}/>
                    <StyledHamburgerBar topHeight={topHeight} className={closed||"change2"}/>
                    <StyledHamburgerBar topHeight={topHeight} className={closed||"change3"}/>
                </StyledHamburgerBarContainer> 
                <StyledNavMenuLogoSection>someLogo</StyledNavMenuLogoSection>
            </StyledNavMenuTopSection>
            <StyledNavMenuContentSection topHeight={topHeight} className={closed&&'closed'}>
                <StyledNavMenuContentSection_li>
                    <StyledNavMenuContentSection_a href="/">Home</StyledNavMenuContentSection_a>
                </StyledNavMenuContentSection_li>
                <StyledNavMenuContentSection_li>
                    <StyledNavMenuContentSection_a href="/about">About</StyledNavMenuContentSection_a>
                </StyledNavMenuContentSection_li>
                <StyledNavMenuContentSection_li>
                    <StyledNavMenuContentSection_a href="/contact">Contact</StyledNavMenuContentSection_a>
                </StyledNavMenuContentSection_li>
            </StyledNavMenuContentSection>
        </StyledNavMenu>            
    )
}

export default Header