import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function ResumeBox(props){
  let resumeDark
  if (props.colorState === true){resumeDark ='dark'} else {resumeDark=''}
  const currentstate = props.currentstate
  let dynoGrid
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridRow:  '2/3', gridColumn: '1/2', opacity:'0.2'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridArea:'1 / 3 / 2 / 4' ,zIndex:'1'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridRow:  '2/3', gridColumn: '1/2',opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow:  '2/3', gridColumn: '1/2'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow:  '7/8', gridColumn: '1/2'}
  }else if(currentstate === "About" && window.innerWidth< 1000){
    dynoGrid = {gridRow:  '1/2', gridColumn: '3/4'}
  }else if(currentstate === "Projects" || currentstate === "Media" && window.innerWidth< 1000){
    dynoGrid = {gridRow:  '7/8', gridColumn: '1/2', opacity:'0.1'}
  }

  return(
    <div className={'card resumeBox '+ props.carddark} style={dynoGrid}>
        <a href='https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Af9adc54e-6557-3751-be04-5eb1d4aba826&viewer%21megaVerb=group-discover' target="_blank" rel="noopener">
        <div><img src={'images/resume_icon.png'} className='resume_icon' alt='Resume'/></div>
        </a>
    </div>
  )
}
export default ResumeBox