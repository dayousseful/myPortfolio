import React, { Component } from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function Card11(props){

  const currentstate = props.currentstate
  let dynoGrid, iconState

  if (currentstate === "Media") {
      dynoGrid = {gridRow: '1/2', gridColumn: '4/5'}
    } else if(currentstate === "About") {
      dynoGrid = {gridRow: '3/4', gridColumn: '4/5', opacity:'0.2'}
    } else if(currentstate === "Projects") {
      dynoGrid = {gridRow: '3/4', gridColumn: '4/5', opacity:'0.2'}
    }else{
      dynoGrid = {gridRow: '3/4', gridColumn: '4/5'}
  }

  if (props.colorState === true){ iconState ='src/images/github-mark-white.svg'} else {iconState ='src/images/github-mark.svg'}

  return(
    <div className={'card Github'+props.carddark} style={dynoGrid}>
      <a href='https://github.com/dayousseful' target="_blank" rel="noopener" >
        <img src={iconState} className='image1' alt='Github Icon'/>
      </a>
    </div>
  ) 
}

export default Card11