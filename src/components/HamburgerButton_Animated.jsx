import React from 'react'

const HamburgerButton_Animated = ({menuClosed, menuToggleHandler}) => {
  
const barStyles = {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    borderRadius: "2px",
    margin: "6px 0",
    transition: "0.4s"
}
const styles = {
    container:{
        cursor: "pointer",
        padding: "5px 10px",
        backgroundColor: menuClosed?"transparent":"white",
        zIndex: 1
    },
    bar:barStyles,
    change_bar1:{
        ...barStyles,
        transform: "translate(0, 11px) rotate(-45deg)"
    },
    change_bar2:{
        ...barStyles,
        opacity: "0"
    },
    change_bar3:{
        ...barStyles,
        transform: "translate(0, -11px) rotate(45deg)"
    }
}  
  
return (
    <div style={styles.container} onClick={menuToggleHandler}>
        <div style={menuClosed?styles.bar:styles.change_bar1}></div>
        <div style={menuClosed?styles.bar:styles.change_bar2}></div>
        <div style={menuClosed?styles.bar:styles.change_bar3}></div>
    </div>
  )
}

export default HamburgerButton_Animated