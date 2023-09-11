import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import { useState } from 'react'


function Card10(props){
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
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '3/5', gridColumn: '1/3'}
  }
  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return(
  <div className={'card card10'+props.carddark} style={dynoGrid}>
    <h2> Shall I keep you in the loop?</h2>
    <form action='https://docs.google.com/forms/d/e/1FAIpQLSemvG-7hHe4toRoj80-6O5cG9rNcjhzNOUYv-T80Ts09mARCw/formResponse'onSubmit={handleSubmit} >
      <br/>
      <div>
      <input placeholder="Name" name='entry.1971235094'value={name} onChange={(e) => setName(e.target.value)}/></div>
      <div>
      <input placeholder="Email address" name='entry.1234299583' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <button>submit</button>
      {/* <input defaultValue="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/> */}
    </form>
  </div>
) 
}
export default Card10