import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function LinkedinBox(props){
    const currentstate = props.currentstate
    let dynoGrid
    if (currentstate === "Media") {
      dynoGrid = {gridArea: '1/3/2/4'}
    } else if(currentstate === "About") {
      dynoGrid = {gridArea : '4/ 4 / 5 / 5', opacity:'0.2'}
    } else if(currentstate === "Projects") {
      dynoGrid = {gridRow:  '2/3', gridColumn: '2/3' ,opacity:'0.2'}
    }else{
      dynoGrid = {gridRow:  '2/3', gridColumn: '2/3'}
    }
  
    return(
    <a href='https://www.linkedin.com/in/youssef-ibrahim7/' target="_blank" rel="noopener" className={'card card5'+props.carddark} style={dynoGrid}>
    <img src={'src/images/linkedin-white.svg'} className='image1' alt='Linkedin'/>
    </a>) 
}
export default LinkedinBox