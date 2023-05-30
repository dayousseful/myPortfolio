import React from 'react'
import { useState } from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function Designs(props){
    const currentstate = props.currentstate
    let dynoGrid
    if (currentstate === "Projects") {
      dynoGrid = {gridRow: '1/2', gridColumn: '1/3'}
    } else if(currentstate === "All") {
      dynoGrid = {gridArea: '3/1/4/3' , zIndex:'1'}
    } else{
      dynoGrid = {gridArea: '3/1/4/3' , opacity:'0.2'}
    }
  
    var image1 = 'src/images/Fee9sGlXgAkc-gV.jpeg'
    var image2 = 'src/images/FhYkp7wWQAAqGKA.jpeg'
    var image3 = 'src/images/FYnHgqxXoAAI9Em.jpeg'
    var image4 = 'src/images/FkLoT8DXEAEvIT7.jpeg'
    var image5 = 'src/images/Fj3O_zBXgAAiDDn.jpeg'
    
    // [imageindex, setImageindex] = useState(3)


    // const scrollLeft= () =>{
    //   setImageindex = imageindex + 1
    // }
    // const scrollRight = () =>{
    //   setImageindex = imageindex - 1
    // }

    return(
        <div className={'card designs'+ props.carddark} style={dynoGrid}>
          <div><img src={'src/images/chevron-back-outline.svg'} className='arrow_left'/></div>
          <img src={image1} alt="Past designs" />
          <div><img src={'src/images/chevron-forward-outline.svg'} className='arrow_right'/></div>
        </div>
        
)}
export default Designs