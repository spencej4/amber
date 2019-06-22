import React from 'react'
import './testimonials.css'

class Testimonials extends React.Component{
  render(){
    return(
      <div id="testimonials" className="testemonials">
          <div className='title'>
            <p className='pre-title-text'>Testimonials</p>
            <p className='title-text'>Testimonials</p>
          </div>
          <div className='testimonials-body-row1'>
            <div className='testimonial-item left'>
              <p className='words-of-kindness'>
                Post-ironic brooklyn kale chips health goth. Prism succulents pour-over, 
                pok pok artisan raw denim kombucha. Trust fund pinterest dreamcatcher, 
                man bun bicycle rights put a bird on it leggings offal lyft vaporware schlitz 
                everyday carry squid meditation fanny pack. Messenger bag wolf art party selfies h
                umblebrag master cleanse hammock. Letterpress chia cloud bread tumeric blog tofu, 
                lo-fi echo park austin leggings, pok pok iPhone literally glossier. Hot chicken DIY bushwick
              </p>
              <p className='author'>
                - Casey, first time mother, Ballard
              </p>
            </div>
            <div className='testimonial-item right'>
              <p className='words-of-kindness'>
                Paleo cardigan jean shorts neutra farm-to-table. Tote bag chambray edison bulb 
                williamsburg truffaut snackwave poke gluten-free fingerstache plaid flannel prism 
                chillwave actually. Gastropub gochujang pitchfork woke fashion axe sriracha. Kombucha 
                you probably haven't heard of them humblebrag master cleanse hammock. Letterpress chia 
                cloud bread tumeric blog tofu, lo-fi echo park fixie organic semiotics ennui ugh
                vexillologist microdosing. Typewriter lumbersexual keytar occupy hoodie synth you 
                probably haven't heard of them austin photo 
              </p>
              <p className='author'>
                - Eva, first time mother, Ballard
              </p>
            </div>
          </div>
          <div className='testimonials-body-row2'>
            <div className='testimonial-item'>
              <p className='words-of-kindness'>
                Tumblr schlitz biodiesel forage echo park. Readymade dreamcatcher vaporware shaman 
                gluten-free, 8-bit offal iPhone. Twee pok pok church-key kogi etsy. Pour-over beard 
                truffaut edison bulb chia hammock cliche migas kombucha 90's plaid. Whatever meggings 
                glossier ramps vape. You probably haven't heard of them letterpress cliche slow-carb wolf, 
                marfa green juice salvia 8-bit blue bottle
              </p>
              <p className='author'>
                - Gloria, mother of two, Beacon Hill
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Testimonials