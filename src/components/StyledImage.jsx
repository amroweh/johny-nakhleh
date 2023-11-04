import React from 'react'
import './component_css/Styled_Image.scss'

const StyledImage = ({src, width}) => {
  return (
    <div className='styled-image-container'>
        <img src={src} className='styled-image' width={width+"%"}/>
    </div>
  )
}

export default StyledImage