import React from 'react'
import "./component_css/Styled_Box.scss";

const StyledBox = ({content, linkText, linkDest}) => {
  return (
    <div className="styled-box">
      <h2>{content}</h2>
      <p><a href={linkDest}>{linkText}</a></p>
    </div>
  );
}

export default StyledBox