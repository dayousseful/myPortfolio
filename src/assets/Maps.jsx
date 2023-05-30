import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { useMemo } from 'react'


function Maps(props){
    <GoogleMap zoom={10} center={map_center} mapContainerClassName={'mapclass'}>
    <Marker position={map_center}/>
    </GoogleMap>
}
export default MapBox