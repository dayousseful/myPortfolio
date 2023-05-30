import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'





function Card4(props){

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
    <a className={'card card4'+props.carddark} style={dynoGrid}>
        <h1>About</h1>
    </a>
    ) }
export default Card4