import React, { Component } from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function Spotify(props){

    const currentstate = props.currentstate
    let dynoGrid

    if (currentstate === "Media") {
        dynoGrid = {gridRow: '1/2', gridColumn: '4/5'}
      } else if(currentstate === "About") {
        dynoGrid = {gridRow: '3/4', gridColumn: '4/5', opacity:'0.2'}
      } else if(currentstate === "Projects") {
        dynoGrid = {gridRow: '3/4', gridColumn: '4/5', opacity:'0.2'}
      }else{
        dynoGrid = {gridRow: '3/4', gridColumn: '4/5'}
    }

    return(
        <div className={'card Spotify'+props.carddark} style={dynoGrid}>
        Spotify
        </div>
    ) 
}

export default Spotify