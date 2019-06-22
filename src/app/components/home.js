import React from 'react'
import './home.css';
const smoothScroll = require('smoothscroll')


class Home extends React.Component {
  next=()=>{
    smoothScroll(window.innerHeight)
  }
  render(){
    return (
      <div className="home" >
        <div className="home-text">
          <div className='pre-hero-title'><p>Hello!</p></div>
          <div className="hero-title"><p className='logo-font'>I'm</p><strong>Amber Smith</strong></div>
          <p className="pop-pop">A professional nanny</p>
          <p className='subtext'>Dedicated and nurturing nanny that helps familes in Seattle, WA.</p>
        </div>
        <div className="landing-image"></div>
      </div>
    )
  }
}


export default Home
