import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import { useMemo } from 'react'


function MapBox(props){
  const currentstate = props.currentstate
  let dynoGrid
  if (currentstate === "Media") {
    dynoGrid = {gridArea:'1 / 1 / 2 / 3'}
    } else if(currentstate === "About") {
    dynoGrid = {gridRow: '4/5', gridColumn: '1/3', opacity:'0.2'} 
    } else if(currentstate === "Projects") {
    dynoGrid = {gridRow: '4/5', gridColumn: '1/3', opacity:'0.2'}
    }else{
    dynoGrid = {gridRow: '4/5', gridColumn: '1/3'}
  }
  const markerTest = useMemo(() => ({ lat:28.4899, lng:-81.4294}), []); 

  const map_center = {lat:28.4899, lng:-81.4294}
  
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyAReoG86J6cQAhwL8rJo2FGUiahJg61OXM',
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

    <GoogleMap zoom={5} center={map_center} mapContainerClassName={'mapclass'}>
    <MarkerF title={'Uluru'}
        name={'Location'}
        key={1}
        position={markerTest}/>
    </GoogleMap></div>) 
    
}
export default MapBox