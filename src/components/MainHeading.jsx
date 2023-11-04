import React from 'react'
import './component_css/Header_main.scss'

const MainHeading = ({children, centred}) => {
    return (
    <h1 className={centred?'header-main centred':'header-main'}>{children}</h1>
  )
}

export default MainHeading