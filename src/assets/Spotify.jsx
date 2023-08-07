import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import getCurrentlyPlayedItem from './Currently_Played'
import { useEffect } from "react";

function Spotify(props){
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
  
  useEffect(() => {
    Promise.all([
    getCurrentlyPlayedItem(
    props.client_id,
    props.client_secret,
    props.refresh_token)])
  },[getCurrentlyPlayedItem]);

  // const login = `${AUTH_ENDPOINT}?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:5173/redirect&scope=user-read-currently-playing%20 user-top-read%20user-read-recently-played`

  // da el m7tago 3lshan t3ml login w tgeb el refresh token bta3t el production
  // localStorage. removeItem('token')
  {/* <a href={login}>Login to Spotify</a> */}
  return(
    <div className={'card Spotify'+props.carddark} 
    style={dynoGrid}>
    </div>
  ) 
}

export default Spotify