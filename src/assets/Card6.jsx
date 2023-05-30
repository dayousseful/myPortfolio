import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'





function Card6(props){
    const currentstate = props.currentstate
    let dynoGrid
    if (currentstate === "Media") {
        dynoGrid = {gridRow: '2/4', gridColumn: '3/4', opacity:'0.2'}
      } else if(currentstate === "About") {
        dynoGrid = {gridRow: '2/4', gridColumn: '3/4', opacity:'0.2'}
      } else if(currentstate === "Projects") {
        dynoGrid = {gridArea: '1 / 4 / 3 / 5'}
      }else{
        dynoGrid = {gridRow: '2/4', gridColumn: '3/4'}
      }

  
return(
    <div className={'card card6'+props.carddark} style={dynoGrid}> 
    <h1>projects</h1>
    </div>
    ) }
export default Card6