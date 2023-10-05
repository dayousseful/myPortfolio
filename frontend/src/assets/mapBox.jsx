import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import { useMemo } from 'react'


function MapBox(props){

  const currentstate = props.currentstate
  let dynoGrid
 
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridArea: '3/1/4/3', opacity:'0.1'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '4/5', gridColumn: '1/3', opacity:'0.2'} 
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '1/2', gridColumn: '1/3'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '4/5', gridColumn: '1/3'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '5/7', gridColumn: '1/3'}
  }else if(currentstate === "About" || currentstate === "Media" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '5/7', gridColumn: '1/3', opacity:'0.1'}
  }else if(currentstate === "Projects" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '1/3', gridColumn: '1/3'}
  }else if(currentstate === "Media" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '7/8', gridColumn: '2/3', opacity:'0.1'}
  }
  
  const markerTest = useMemo(() => ({ lat:28.4899, lng:-81.4294}), []); 
  const map_center = {lat:28.4899, lng:-81.4294}

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })
  if (!isLoaded) return <div>loading...</div>
  // const [users, setUsers] = React.useState([])
  // const fetchUserData = () => {
  // fetch('https://api.spotify.com/v1/me/player/recently-played')
  // .then(response => {
  //   return response.json()
  // })
  // .then(data => {
  //   setUsers(data)
  //   console.log(users)
  // })}

  return(
    // <div className={'card card9'+props.carddark} style={dynoGrid}>
    // <h1>Media</h1>
    // </div>
    <div className={'card MapBox'+props.carddark} style={dynoGrid}>

    <GoogleMap 
      zoom={10}
      center={map_center} 
      mapContainerClassName={'mapclass'}
      options={{mapId: 'b98ad0ccc1f81c93'}}
    >
    <MarkerF title={'Millenia'}
        name={'Location'}
        key={1}
        position={markerTest}/>
    </GoogleMap></div>) 

}
export default MapBox