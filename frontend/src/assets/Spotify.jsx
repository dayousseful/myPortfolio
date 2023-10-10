import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import getCurrentlyPlayedItem from './Currently_Played'
import { useEffect, useState } from "react";

function Spotify(props){
  const currentstate = props.currentstate
  // const albumImageUrl = props.albumImageUrl
  // const artist = props.artist
  // const songUrl = props.songUrl
  // const song = props.song
  // const previewUrl = props.previewUrl
  const [result, setResult] = useState({});

  let dynoGrid
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '2/4', gridColumn: '3/4', opacity:'0.2'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '2/4', gridColumn: '3/4', opacity:'0.2'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridArea: '1 / 4 / 3 / 5'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '2/4', gridColumn: '3/4'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '5/7', gridColumn: '3/6'}
  }else if(currentstate === "About" || currentstate === "Media" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '5/7', gridColumn: '3/6', opacity:'0.2'}
  }else if(currentstate === "Projects" && window.innerWidth< 1000 && window.innerWidth>800){
    dynoGrid = {gridRow: '1/4', gridColumn: '3/5'}
  }else if(currentstate === "Projects" && window.innerWidth< 800){
    dynoGrid = {order:'-1'}
  }
  
  useEffect(() => {
    Promise.all([
    getCurrentlyPlayedItem(
    props.client_id,
    props.client_secret,
    props.refresh_token),
    ]).then((results) => {
    setResult(results[0]);
    });
  },[getCurrentlyPlayedItem]);
  //   useEffect(() => {
  //     Promise.all([
  //         getNowPlayingItem(
  //             props.client_id,
  //             props.client_secret,
  //             props.refresh_token
  //         ),
  //     ]).then((results) => {
  //         setResult(results[0]);
  //         setLoading(false);
  //     });
  // });
  // const login = `${AUTH_ENDPOINT}?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:5173/redirect&scope=user-read-currently-playing%20 user-top-read%20user-read-recently-played`

  // da el m7tago 3lshan t3ml login w tgeb el refresh token bta3t el production
  // localStorage. removeItem('token')
  {/* <a href={login}>Login to Spotify</a> */}
  return(
    <div className={'card Spotify'+props.carddark} style={dynoGrid}>
      <div>
        <a href={result.previewUrl} target="_blank" rel="noopener">
          <img className="spotifyImg" src={result.albumImageUrl} alt="Song Image" />
        </a>
      </div>

      <div>
        <div>
          <img src={'src/images/Spotify-Icon.svg'} className='spotifyIcon'   alt='Spotify Icon'/>
        </div>
        <div style={{margin:'7px'}} className='recentlyplayedContanier'>
          <div className='animationContainer'>
            <div className='spotifyAnimator1'></div>
            <div className='spotifyAnimator2'></div>
            <div className='spotifyAnimator3'></div>
          </div>

          <div><p className='recentlyPlayed'>Recently Played</p></div>
        </div>
        <div style={{margin:'5px'}}>
          <a className='trackName' href={result.songUrl} target="_blank" rel="noopener">
          <p>{result.song}</p></a>
        </div>
        <div style={{margin:'5px'}}><p className='artistName'>{result.artist}</p>
        </div>
      </div>
    </div>
  ) 
}
export default Spotify