import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function AboutMe(props){

  const currentstate = props.currentstate
  let dynoGrid
  if (currentstate === "Media") {
    dynoGrid = {gridRow: '2/4', gridColumn: '4/5', opacity:'0.2'}
  } else if(currentstate === "About") {
    dynoGrid = {gridRow: '1/3', gridColumn: '4/5'}
  } else if(currentstate === "Projects") {
    dynoGrid = {gridArea:'2 / 3 / 4 / 4' , opacity:'0.2'}
  }else{
    dynoGrid = {gridRow: '1/3', gridColumn: '4/5'}
  }

  
  return(
    <div className={'card aboutMe'+props.carddark} style={dynoGrid}>
      <nav className='aboutmeNavBar'>
        <div className='aboutmeHighlight'></div>
        <div className='filter' style={{zIndex:1}}>About</div>
        <div className='filter' style={{zIndex:1}}>Inspiration</div>
      </nav>
      <p>I am a recent graduate from the University of central Florida, with bachelors in Web design and social platforms</p>
    </div>
  ) 

}
export default AboutMe