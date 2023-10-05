import React from 'react'
import Body from './assets/Body'
import Header from './assets/Header'

function App() {

  const [selected ,setSelected ] = React.useState('All')
  const [goingdark ,setGoingdark ] = React.useState(true)

  const Color = {
    background: goingdark ? "var(--dark-bg-color)" : "var(--main-bg-color)", position: "relative", zIndex: "0"
  }

  return (
    <div style={Color}>
    <Header 
    currentstate={selected} setCurrentstate={setSelected} colorState={goingdark}  />
    <Body 
    currentstate={selected} colorState={goingdark} setColorstate={setGoingdark} />
    </div>
  )
}
export default App
