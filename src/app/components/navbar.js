import React from 'react';
import './navbar.css';
import {connect} from 'react-redux';
import smoothScroll from 'smoothscroll'

// fix navbar this is just display
class Navbar extends React.Component{
  constructor(){
    super();
    this.state = {
      mobileMenuRendered : false
    }
    this.handleMobileLink = this.handleMobileLink.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  scrollTo = (where) =>{
    let services = document.getElementById('services').offsetTop
    let about = document.getElementById('about').offsetTop
    let testimonials = document.getElementById('testimonials').offsetTop
    let contact = document.getElementById('contact').offsetTop

    
    switch(where){
      // case "home":
      // return smoothScroll(0)
      case "services":
        return smoothScroll(services)
      case "about":
        return smoothScroll(about)
      case "testimonials":
        return smoothScroll(testimonials)
      case "contact":
        return smoothScroll(contact)
      default:
        return console.log("ERROR");
    }
  }

  // slides mobile menu in and out
  toggleMenu =() =>{
    let mainNavbar = document.getElementById('main_navbar');
    let hamburgerBars = document.getElementsByClassName('bar');

    if (this.state.mobileMenuRendered === false) {
      this.setState ({
        mobileMenuRendered: true
      })
      mainNavbar.classList.add('animate');
      hamburgerBars[0].style.backgroundColor = "white"
      hamburgerBars[1].style.backgroundColor = "white"
      hamburgerBars[2].style.backgroundColor = "white"

    } else if (this.state.mobileMenuRendered === true) {
      this.setState ({
        mobileMenuRendered: false
      })
      mainNavbar.classList.remove('animate');
      hamburgerBars[0].style.backgroundColor = "black";
      hamburgerBars[1].style.backgroundColor = "black";
      hamburgerBars[2].style.backgroundColor = "black";
      return
    }
  }

  handleMobileLink(param) {
    // when user clicks on a mobile link
    // scroll to that part of the page
    if (param === 'services') {
      this.scrollTo('services');
    }else if (param === 'about') {
      this.scrollTo('about');
    }else if (param === 'testimonials') {
      this.scrollTo('testimonials');
    }else if (param === 'contact'){
      this.scrollTo('contact');
    }
    // and hide the mobile menu
    this.toggleMenu();
  }


  render(){
    return(
      <div  className="nav">
      <div id='main_navbar'>
        <ul className='side_nav_menu'>
          <li onClick={()=>this.handleMobileLink('services')}><p>Services</p></li>
          <li onClick={()=>this.handleMobileLink('about')}><p>About</p></li>
          <li onClick={()=>this.handleMobileLink('testimonials')}><p>Testimonials</p></li>
          <li onClick={()=>this.handleMobileLink('contact')}><p>Contact</p></li>
          </ul>
        </div>
        <div className="links">
          <ul id="desktopMenu">
            <li><h1 className='logo'>Amber Smith</h1></li>
            <li onClick={()=>this.scrollTo('services')}><p>Services</p></li>
            <li onClick={()=>this.scrollTo('about')}><p>About</p></li>
            <li onClick={()=>this.scrollTo('testimonials')}><p>Testimonials</p></li>
            <li onClick={()=>this.scrollTo('contact')}><p>Contact</p></li>
          </ul>
        </div>
        <div className="hamburger_click_me">
          <input onClick={this.toggleMenu} type="checkbox" />
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    )
  }
}

const state = (state) =>{
  return{
    nav: state.State
  }
}
Navbar = connect(state)(Navbar)

export default Navbar