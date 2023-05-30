import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import Box1 from "./Box1"
import Colorbox from './Colorbox'
import ResumeBox from './ResumeBox'
import LinkedinBox from './LinkedinBox'
import Designs from './Designs'
import Card4 from './Card4'
import Card6 from './Card6'
import MapBox from './MapBox'
import Card10 from './Card10'
import Spotify from './Spotify'

function Body(props) {
    function toggleColor(){props.setColorstate(prevGoingdark => (!prevGoingdark))}
    let containerStyle, cardDark
    if (props.colorState === true){containerStyle =' con-dark', cardDark=' car-dark'}else {containerStyle='', cardDark=''}


    return (
        <div className={'container'+containerStyle}  >
        <Box1 carddark={cardDark} currentstate={props.currentstate} colorState={props.colorState} />
        <Colorbox carddark={cardDark} currentstate={props.currentstate} togglecolor={toggleColor} colorState={props.colorState}/>
        <ResumeBox carddark={cardDark} colorState={props.colorState} currentstate={props.currentstate}/>
        <LinkedinBox carddark={cardDark} currentstate={props.currentstate}/>
        <Designs carddark={cardDark} currentstate={props.currentstate}/>
        <Card4 carddark={cardDark} currentstate={props.currentstate}/>
        <Card6 carddark={cardDark} currentstate={props.currentstate}/>
        <Spotify carddark={cardDark} currentstate={props.currentstate}/>
        <MapBox carddark={cardDark} currentstate={props.currentstate}/>
        <Card10 carddark={cardDark} currentstate={props.currentstate}/>
        </div>
    )
}
export default Body;