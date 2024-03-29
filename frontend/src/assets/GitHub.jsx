import React, { Component } from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function GitHub(props){

  const currentstate = props.currentstate
  let dynoGrid, iconState

  if (currentstate === "Media"  && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '1/2', gridColumn: '4/5'}
  } else if(currentstate === "About"  && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '3/4', gridColumn: '4/5', opacity:'0.2'}
  } else if(currentstate === "Projects"  && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '3/4', gridColumn: '4/5', opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '3/4', gridColumn: '4/5'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow:  '7/8', gridColumn: '2/3'}
  }else if(currentstate === "About" || currentstate === "Projects" && window.innerWidth< 1000){
    dynoGrid = {gridRow:  '7/8', gridColumn: '2/3', opacity:'0.1'}
  }else if(currentstate === "Media" && window.innerWidth< 1000 && window.innerWidth> 800){
    dynoGrid = {gridRow:  '1/2', gridColumn: '3/4'}
  }else if(currentstate === "Media" && window.innerWidth< 800){
    dynoGrid = {order:'-1'}
  }

  if (props.colorState === true){ iconState ='images/github-mark-white.svg'} else {iconState ='images/github-mark.svg'}

  return(
    <div className={'card Github'+props.carddark} style={dynoGrid}>
      <a href='https://github.com/dayousseful' target="_blank" rel="noopener" >
        <img src={iconState} className='Icons' alt='Github Icon'/>
      </a>
    </div>
  ) 
}

export default GitHub