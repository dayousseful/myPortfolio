import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM  from 'react-dom/client'
// import { ReactComponent as left_arrow_svg  } from 'src/images/chevron-back-outline.svg'
// import { ReactComponent as right_arrow_svg } from 'src/images/chevron-forward-outline.svg'
import '../style/Body.css'

function Designs(props){
  const currentstate = props.currentstate
  
  let dynoGrid
  if (currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '4/5', gridColumn: '1/3', opacity:'0.2'}
  } else if(currentstate === "All" && window.innerWidth> 1000) {
    dynoGrid = {gridArea: '3/1/4/3' , zIndex:'1'}
  } else if(currentstate === "About" && window.innerWidth> 1000){
    dynoGrid = {gridArea: '3/1/4/3' , opacity:'0.1'}
  } else if(currentstate === "Media" && window.innerWidth> 1000){
    dynoGrid = {gridArea:'1 / 1 / 2 / 3'}
  }else if(currentstate === "All" || currentstate === "Media" && window.innerWidth< 1000 && window.innerWidth> 800){
    dynoGrid = {gridRow: '2/3', gridColumn: '3/5'}
  }else if(currentstate === "About" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.1'}
  }else if(currentstate === "Projects" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '5/6', gridColumn: '3/5', opacity:'0.1'}
  }else if(currentstate === "Media" && window.innerWidth< 800){
    dynoGrid = {order:'-1'}
  }

  const images = [
    {url : 'images/image1.jpeg', title:'image1'},
    {url : 'images/image2.jpeg', title:'image2'},
    {url : 'images/image3.jpeg', title:'image3'},
    {url : 'images/image4.jpeg', title:'image4'},
    {url : 'images/image5.jpeg', title:'image5'}
  ]
  
  let Icon_filler
  
  useEffect(() => {
    const colorState = props.colorState ? Icon_filler = 'black' : Icon_filler = 'white'
  }, []);

  const [imageindex, setImageindex] = useState(0)
  
  const scrollLeft= () =>{
    const isFirstslide = imageindex === 0
    const newIndex = isFirstslide? images.length - 1 : imageindex - 1
    setImageindex(newIndex)
  }
  
  const scrollRight = () =>{
    const isLastslide = imageindex === images.length - 1
    const newIndex = isLastslide ? 0 : imageindex + 1
    setImageindex(newIndex)
  }

  return(
    <div className={'card designs'+ props.carddark} style={dynoGrid}>
      <div  className='arrow_left' onClick={scrollLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Back</title><path fill={Icon_filler} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"/></svg>
      </div>

      { <img src={images[imageindex].url} alt="Past designs" /> }

      
      <div className='arrow_right'onClick={scrollRight}> 
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill={Icon_filler} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg> 
      </div>
    </div>
  )
}
export default Designs