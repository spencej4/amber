import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import Services from './components/services';
import About from './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/contact';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </div>
    )
  }
}
export default App
