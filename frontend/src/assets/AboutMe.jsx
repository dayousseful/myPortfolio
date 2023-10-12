import React from 'react'
import ReactDOM  from 'react-dom/client'
import '../style/Body.css'
import { useState } from 'react'

function AboutMe(props){
  const [highlight, setHighlight] = useState(true)
  const currentstate = props.currentstate
  let dynoGrid, highlightStyle, aboutmeHighlight, aboutNavbar, borderFix
  if (currentstate === "Media" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '2/4', gridColumn: '4/5', opacity:'0.2'}
  } else if(currentstate === "About" && window.innerWidth> 1000) {
    dynoGrid = {gridRow: '1/3', gridColumn: '4/5'}
  } else if(currentstate === "Projects" && window.innerWidth> 1000) {
    dynoGrid = {gridArea:'2 / 3 / 4 / 4' , opacity:'0.2'}
  }else if(currentstate === "All" && window.innerWidth> 1000){
    dynoGrid = {gridRow: '1/3', gridColumn: '4/5'}
  }else if(currentstate === "All" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '3/5', gridColumn: '3/5'}
  }else if(currentstate === "About" && window.innerWidth< 1000 && window.innerWidth > 800){
    dynoGrid = {gridRow: '2/4', gridColumn: '3/5'}
  }else if(currentstate === "Projects" && window.innerWidth< 1000){
    dynoGrid = {gridRow: '6/8', gridColumn: '3/5', opacity:'0.1'}
  }else if(currentstate === "Media" && window.innerWidth< 1000 ){
    dynoGrid = {gridRow: '3/5', gridColumn: '3/5', opacity:'0.1'}
  }else if(currentstate === "About" && window.innerWidth< 800){
    dynoGrid = {order:'-1'}
  }
  
  
  highlight ? highlightStyle = {left:4,width:70} : highlightStyle = {right:4.5,width:105}
  
  
  function abouthighlightToggle(){highlight ? null : setHighlight(true)}
  function inspohighlightToggle(){highlight ? setHighlight(false) : null }

  if (props.colorState === false){
    aboutNavbar = 'aboutmeNavBar'
    borderFix = ' borderFix'
    aboutmeHighlight = 'aboutmeHighlight'
  } else{
    aboutNavbar = 'aboutmeNavBarDark'
    aboutmeHighlight = 'aboutmeHighlightDark'
    borderFix = ''
  }

  if (highlight){ 
    return(
      <div className={'card aboutMe'+ borderFix + props.carddark} style={dynoGrid}>
        <div className='navDivAboutme' >
          <nav className={aboutNavbar}>
          <div className={aboutmeHighlight} style={highlightStyle}></div>
          <div className='filter filterMyself' style={{zIndex:1}} onClick={abouthighlightToggle}>Myself</div>
          <div className='filter filterProject' style={{zIndex:1}} onClick={inspohighlightToggle}>The Project</div>
        </nav>
        </div>
          <div className='aboutmeParaDiv'><p className='aboutmeParagraph'>Hello, I graduated from the university of Central Florida with a degree in <span>Web Design & Social Platforms</span>. It’s a fusion of designing and developing for web & mobile applications. I like Music, Art, Football (soccer), and Tech.
          </p><br/>
          <p className='aboutmeParagraph'>I view web design through the concept of immersive architecture. This consists of three main parts: creating aesthetically pleasing designs, delivering a seamless user experience, and maintaining complex functionality of the components of the platform</p><br/>
          <p className='aboutmeParagraph'>My obsession with web design grows because it gives me the privilege to express my ideas and help other people communicate their products and services.</p>
          </div>
      </div>
    )
  }else{
    return(
      <div className={'card aboutMe'+props.carddark} style={dynoGrid}>
        <div className='navDivAboutme'>
        <nav className={aboutNavbar}>
          <div className={aboutmeHighlight} style={highlightStyle}></div>
          <div className='filter filterMyself' style={{zIndex:1}} onClick={abouthighlightToggle}>Myself</div>
          <div className='filter filterProject' style={{zIndex:1}} onClick={inspohighlightToggle}>The Project</div>
        </nav>
        </div>
        <div className='aboutproParaDiv'>
        <p className='aboutmeParagraph'>I alwayes wanted to delevop new projects that allow me to show my skills and passion without hitting analysis paralysis, and thats where the inspiration of this project came from. 
        </p><br/><p className='aboutmeParagraph'>Creating a wireframe helped me put things into perspective including the content, the page structure and layout, the app&apos;s functions. Then, by adding more colors, styles, graphics, and typography, I was able to turn this wireframe into a prototype. With the prototype and breaking content into smaller sections, I was able to start the development process and work my way up to deployment.
        </p>
        <div className='progIcons'>
          <br/>
        <p className='aboutmeParagraph'>This project was buit with</p>
        <svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" fill="url(#paint0_linear)"/><path d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z" fill="url(#paint1_linear)"/><defs id="defs50"><linearGradient id="paint0_linear" x1="6.0002" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stopColor="#41D1FF" id="stop38"/><stop offset="1" stopColor="#BD34FE" id="stop40"/></linearGradient><linearGradient id="paint1_linear" x1="194.651" y1="8.8182" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stopColor="#FFEA83" id="stop43"/><stop offset=".0833" stopColor="#FFDD35" id="stop45"/><stop offset="1" stopColor="#FFA800" id="stop47"/></linearGradient></defs>
        </svg>

        <svg height="38px" width="38px" xmlns="http://www.w3.org/2000/svg"
        aria-label="CSS3" role="img"
        viewBox="0 0 512 512"><path fill="#264de4"
        d="M72 460L30 0h451l-41 460-184 52"/><path fill="#2965f1"
        d="M256 37V472l149-41 35-394"/><path fill="#ebebeb"
        d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"/><path fill="#ffffff"
        d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"/>
        </svg>

        <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/><path fillRule="evenodd" clipRule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"/><path fillRule="evenodd" clipRule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/><path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"/><path fillRule="evenodd" clipRule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/></svg>
        <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
        </svg>
        <svg width="40px" height="40px" viewBox="0 0 16 32">
        <path d="M10.2503 3.56662C8.90729 1.97316 7.75079 0.354795 7.51452 0.0186734C7.48964 -0.00622447 7.45233 -0.00622447 7.42746 0.0186734C7.19118 0.354795 6.03469 1.97316 4.69165 3.56662C-6.83603 18.2688 6.50725 28.1906 6.50725 28.1906L6.61915 28.2653C6.71864 29.7965 6.96735 32 6.96735 32H7.96219C7.96219 32 8.21091 29.809 8.31039 28.2653L8.4223 28.1782C8.43473 28.1906 21.778 18.2688 10.2503 3.56662ZM7.46477 27.9665C7.46477 27.9665 6.86787 27.4561 6.70621 27.1947V27.1698L7.42746 11.1605C7.42746 11.1107 7.50208 11.1107 7.50208 11.1605L8.22333 27.1698V27.1947C8.06167 27.4561 7.46477 27.9665 7.46477 27.9665Z" fill="#00684A"></path></svg>
        
        </div>
      </div>
    </div>
  )

  }


}
export default AboutMe