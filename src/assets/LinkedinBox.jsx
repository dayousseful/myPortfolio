import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'

function LinkedinBox(props){
  const currentstate = props.currentstate
  let dynoGrid
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridArea: '1/3/2/4'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridArea : '4/ 4 / 5 / 5', opacity:'0.2'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridRow:  '2/3', gridColumn: '2/3' ,opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow:  '2/3', gridColumn: '2/3'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '1/2', gridColumn: '4/5'}
  }

  return(
    <div className={'card LinkedinBox'+props.carddark} style={dynoGrid}>
      <a href='https://www.linkedin.com/in/youssef-ibrahim7/' target="_blank" rel="noopener" >
        <img src={'src/images/linkedin-white.svg'} className='Icons' alt='Linkedin'/>
      </a>
    </div>
  )

}
export default LinkedinBox