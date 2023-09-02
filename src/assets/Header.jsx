import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Header.css'

function Header(props) {
  let Highlighted, filterHighlight, filterMenu, contButton
  const selectors = ['All', 'About', 'Projects', 'Media']
  const currentstate = props.currentstate
  
  const renderButtons = selectors => {
    return selectors.map ((currentstate, index) => {
      return ( <div key={index} className={'filter '+'filter'+currentstate} onClick={()=> props.setCurrentstate(currentstate)}>{currentstate}</div>) }) 
  }
  
  if (currentstate === "Media") {
    Highlighted = {width: 70, right: 4}
  } else if(currentstate === "About") {
    Highlighted = {width: 70, left :61}
  } else if(currentstate === "Projects") {
      Highlighted = {width: 84, right: 85}
  }else{
      Highlighted = {width: 55}
  }

  if (props.colorState === true){
    filterMenu = 'filterMenuDark'
    filterHighlight = 'filterHighlightDark'
    contButton = 'cbd'
  } else{
    filterMenu = 'filterMenu'
    filterHighlight = 'filterHighlight'
    contButton = 'cb'
  }

  return (
    <div className='Header'>
      <div className='header__logo'>
      <img src={'src/images/logo.png'} className= 'image1' alt='logo'/>
      </div>
      <nav className={filterMenu}> 
       <div className={filterHighlight} style={Highlighted} ></div>
       {renderButtons(selectors)}
      </nav> 
      <a href='mailto:usfhamdy@yahoo.com' className={contButton}>
       <span>Contact</span>
      </a>
    </div>
  )
} export default Header