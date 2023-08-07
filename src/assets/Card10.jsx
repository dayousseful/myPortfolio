import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import { useState } from 'react'





function Card10(props){
    const currentstate = props.currentstate
    let dynoGrid
    if (currentstate === "Media") {
        dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.2'}
      } else if(currentstate === "About") {
        dynoGrid = {gridArea: '2/ 1 / 3 / 3'}
      } else if(currentstate === "Projects") {
        dynoGrid = {gridRow: '4/5', gridColumn: '3/5', opacity:'0.2'}
      }else{
        dynoGrid = {gridRow: '4/5', gridColumn: '3/5'}
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
    <form onSubmit={handleSubmit} >
      <br/>
      <div>
      <input placeholder="Name"value={name} onChange={(e) => setName(e.target.value)}/></div>
      <div>
      <input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} /></div>

      <br/>
      {/* <input defaultValue="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/> */}
    </form>
  </div>
) 
}
export default Card10