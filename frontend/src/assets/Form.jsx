import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import { useState, useEffect} from 'react'
import axios from 'axios'

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
  const [feedback, setFeedback] = useState(false)

  const axiosPostData = async()=> {
    const postData ={
      name: name,
      email: email
    }
    await axios.post('http://localhost:8080/form', postData)
    .then(res => setFeedback(res.data))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axiosPostData()
  }

  if (!feedback){
    return(
      <div className={'card formContainer'+props.carddark} style={dynoGrid}>
        <div className='formContainerDiv'>
        <div><h2 className='formHeader'> Shall I keep you in the loop?</h2>
        <p className='formParagraph'>Fill out the form to get in touch</p></div>
        <form  className='inputContatiner' onSubmit={handleSubmit}>
          <div><input className='inputBox'placeholder="Name" type='text' value={name} onChange={(e) => setName(e.target.value)}/></div>
          <div><input className='inputBox' placeholder="Email address" type='email' value={email} 
          onChange={(e) => setEmail(e.target.value)} /></div>
          {feedback}
          <div className='buttonDiv'><button className='submitButton'>Submit</button></div>
        </form>
        </div>
      </div>
    )
  }else{
    return(
    <div className={'card formContainer'+props.carddark} style={dynoGrid}>
      <img src='src/images/celebration.png' className= 'celebEmoji' alt='Celebration'/>
    </div>)
  }
  
}
export default Form