import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import { useState , useEffect} from 'react'

function AboutMe(props){
  const [highlight, setHighlight] = useState(true)
  const currentstate = props.currentstate
  let dynoGrid, highlightStyle, aboutmeHighlight, aboutNavbar
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '2/4', gridColumn: '4/5', opacity:'0.2'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '1/3', gridColumn: '4/5'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridArea:'2 / 3 / 4 / 4' , opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '1/3', gridColumn: '4/5'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '3/5', gridColumn: '3/5'}
  }

  
  
  highlight ? highlightStyle = {left:4,width:70} : highlightStyle = {right:4,width:99}
  
  
  function abouthighlightToggle(){highlight ? null : setHighlight(true)}
  function inspohighlightToggle(){highlight ? setHighlight(false) : null }

  if (props.colorState === false){
    aboutNavbar = 'aboutmeNavBar'
    aboutmeHighlight = 'aboutmeHighlight'
  } else{
    aboutNavbar = 'aboutmeNavBarDark'
    aboutmeHighlight = 'aboutmeHighlightDark'
  }

  return(
    <div className={'card aboutMe'+props.carddark} style={dynoGrid}>
      <nav className={aboutNavbar}>
        <div className={aboutmeHighlight} style={highlightStyle}></div>
        <div className='filter' style={{zIndex:1}} onClick={abouthighlightToggle}>About</div>
        <div className='filter' style={{zIndex:1}} onClick={inspohighlightToggle}>Inspiration</div>
      </nav>
      <p>I am a recent graduate from the University of central Florida, with bachelors in Web design and social platforms</p>
    </div>
  ) 

}
export default AboutMe