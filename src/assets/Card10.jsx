import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'





function Card10(props){
    const currentstate = props.currentstate
    let dynoGrid
    if (currentstate === "Media") {
        dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.2'}
      } else if(currentstate === "About") {
        dynoGrid = {gridArea: '2/ 1 / 3 / 3'}
      } else if(currentstate === "Projects") {
        dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.2'}
      }else{
        dynoGrid = {gridRow: '4/5', gridColumn: '3/5'}
      }

  
return(
    <div className={'card card10'+props.carddark} style={dynoGrid}>
    <h1>About</h1>
    </div>
    ) }
export default Card10