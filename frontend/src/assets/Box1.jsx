import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Header.css'

function Box1(props){
  const currentstate = props.currentstate
  let dynoGrid
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridArea:'4 / 1 / 5 / 3', opacity:'0.2'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '1/2', gridColumn: '1/3'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridArea: '3/1/4/3', opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '1/2', gridColumn: '1/3'}
  }else if(currentstate === "All" || currentstate === "About" && window.innerWidth< 1000 & window.innerWidth> 800){dynoGrid = {gridRow: '1/2', gridColumn: '1/2'}
  }else if(currentstate === "Projects" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '5/7', gridColumn: '1/3', opacity:'0.1'}
  }else if(currentstate === "Media" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '1/2', gridColumn: '1/2', opacity:'0.1'}
  }else if (currentstate === "About" && window.innerWidth< 800){
    dynoGrid = {order:'-1'}
  }

  let emojiButton, emoji
  const [emojistate ,setEmojistate ] = React.useState(true)

  props.colorState ? emojiButton ='emoji-b-dark' : emojiButton = ''
  
  emojistate ? emoji = ('src/images/emoji.png') :emoji = ('src/images/emoji 2.png')
  function emojiToggle(){setEmojistate(prevEmojistate => (!prevEmojistate))}

  return(
    <div className={'card card1 ' + props.carddark} style={dynoGrid}>
      <button className={'emojiButton '+emojiButton} onClick={emojiToggle}>Toggle Emoji</button>
      <img src={emoji} className= 'image1' alt='logo'/>
      <p className="card1-into">Hi There! I am Youssef Ibrahim.  I’m a <span>&lt;front-end web developer & designer/&gt;</span>
      </p>
    </div>
  )
}
export default Box1