import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import { useState } from 'react'

function Form(props){
  const currentstate = props.currentstate
  let dynoGrid

  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.2'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridArea: '2/ 1 / 3 / 3'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '4/5', gridColumn: '3/5'}
  }else if(currentstate === "All" || currentstate === "Projects" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '3/5', gridColumn: '1/3'}
  }else if(currentstate === "About" || currentstate === "Projects" || currentstate === "Media" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '3/5', gridColumn: '1/3', opacity:'0.1'}
  }
  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 
  const [feedback, setFeedback] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <div className={'card card10'+props.carddark} style={dynoGrid}>
      <h2> Shall I keep you in the loop?</h2>
      <form>
        <div><input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/></div>

        <div><input placeholder="Email address" value={email} 
        onChange={(e) => setEmail(e.target.value)} /></div>

        <button onSubmit={handleSubmit}>submit</button>
      </form>
    </div>
  ) 
}
export default Form