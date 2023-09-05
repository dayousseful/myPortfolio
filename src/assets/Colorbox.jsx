import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function Colorbox(props){

  let SVGColorToggle, SVGColorToggleTitle, SVGcolorToggleStyle,DM_Container_circle_style
  if (props.colorState === true){SVGColorToggle ='M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z',SVGColorToggleTitle='Moon', SVGcolorToggleStyle={left: 7}, DM_Container_circle_style='DM-Container-circle'} 
  else {SVGColorToggle ='M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z', SVGColorToggleTitle='Sun', SVGcolorToggleStyle={right: 6}, DM_Container_circle_style='DM-Container-circle-white' }

  const currentstate = props.currentstate
  let dynoGrid
  if (currentstate === "Media") {
    dynoGrid = {gridArea: '2 / 2 / 3 / 3', opacity:'0.2'}
  } else if(currentstate === "About") {
    dynoGrid = {gridArea: '4 / 3 / 5 / 4', opacity:'0.2'}
  } else if(currentstate === "Projects") {
    dynoGrid = {gridRow: '1/2', gridColumn: '3/4'}
  }else{
    dynoGrid = {gridRow: '1/2', gridColumn: '3/4'}
  }


  return(
    <div className={'card card2 '+ props.carddark} onClick={props.togglecolor}    style={dynoGrid}>
      <div className={DM_Container_circle_style}>
        <div className='DM-Container-bg' style={SVGcolorToggleStyle}>
          <svg className='DM-Container-icon'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>{SVGColorToggleTitle}</title><path d={SVGColorToggle}/></svg>
        </div>
      </div>
    </div>
)}
export default Colorbox